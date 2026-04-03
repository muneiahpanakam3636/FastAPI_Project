
from fastapi import FastAPI
from pymongo import MongoClient

app =FastAPI ()

client =MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
collection=db["users"]

@app.get("/")
def home():
    return {"message":"API running"}


@app.post("/users")
def create_user(user:dict):
    collection.insert_one(user)
    return{"message":"User created"}
    


@app.get("/users")
def get_users():
    users =list(collection.find({},{"_id":0}))
    return users

@app.put("/users/{email}")
def update_user(email:str,updated_data:dict):
    result =collection.update_one(
        {"email":email},
        {"$set":updated_data}
    )
    if result.modified_count==1:
        return{"message":"User updated successfully"}
    else:
        return{"message":"User not found"}
    
@app.delete("/users/{email}")
def delete_user(email:str):
    result =collection.delete_one({"email":email})
    if result.deleted_count==1:
        return{"message":"user deleted"}
    else:
        return{"message":"user not found"}   



@app.post("/Login")
def Login(user:dict):
    existing_user =collection.find_one({"email":user.get("email")}) 

    if not existing_user:
        return{"message":"User not found"}
    if existing_user.get("password") ==user.get("password"):
        return{
            "message":"Login Successfully!",
            "token":"dummy_token_123"
        }
    else:
        return{"message":"Invalid Password"}  



@app.post("/Logout")
def Logout():
    return{"message":"Logged out Successfully"}      
