# Project: Adonis.js Backend Starter
# 📁 Collection: Auth 


## End-point: Register
### Method: POST
>```
>/auth/register
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name|Fajar Rivaldi Chan|text|
|email|fajarrivaldi2015@gmail.com|text|
|password|password|text|


### Response: 201
```json
{
    "success": true,
    "message": "User register created successfully",
    "data": {
        "name": "Fajar Rivaldi Chan",
        "email": "fajarrivaldi2015@gmail.com",
        "id": "9e9634af-5d32-4ce1-b7e3-f6853602b0b7",
        "created_at": "2023-12-31T17:15:35.679+07:00",
        "updated_at": "2023-12-31T17:15:35.679+07:00"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login
### Method: POST
>```
>/auth/login
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|email|fajarrivaldi2015@gmail.com|text|
|password|password|text|


### Response: 200
```json
{
    "success": true,
    "message": "User Login successfully",
    "data": {
        "user": {
            "id": "de7231ea-5662-4f8e-8436-692f66cb98ab",
            "name": "Fajar",
            "email": "fajarrivaldi@gmail.com",
            "remember_me_token": null,
            "image": "Frame 238442 (1).png",
            "role_id": "0dd3daab-7296-4fac-ba80-de144e44f815",
            "created_at": "2023-12-31T17:08:46.000+07:00",
            "updated_at": "2023-12-31T17:08:46.000+07:00",
            "role": {
                "id": "0dd3daab-7296-4fac-ba80-de144e44f815",
                "name": "Admin",
                "created_at": "2023-12-31T17:01:41.000+07:00",
                "updated_at": "2023-12-31T17:01:41.000+07:00"
            }
        },
        "access_token": {
            "type": "bearer",
            "token": "NQ.JDL5i3vtz4em7joAMto5UH_O4yJYx3R9TChEVa2RhyHzxb02jX-fppV2y6fu",
            "expires_at": "2024-01-01T17:13:11.919+07:00"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Logout
### Method: POST
>```
>/auth/logout
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "User logged out successfully",
    "data": null
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Me
### Method: GET
>```
>/auth/me
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "User details fetched successfully",
    "data": {
        "user": {
            "id": "de7231ea-5662-4f8e-8436-692f66cb98ab",
            "name": "Fajar",
            "email": "fajarrivaldi2015@gmail.com",
            "remember_me_token": null,
            "image": "Cek Bansos.png",
            "role_id": "0dd3daab-7296-4fac-ba80-de144e44f815",
            "created_at": "2023-12-31T17:08:46.000+07:00",
            "updated_at": "2023-12-31T17:27:55.000+07:00",
            "role": {
                "id": "0dd3daab-7296-4fac-ba80-de144e44f815",
                "name": "Admin",
                "created_at": "2023-12-31T17:01:41.000+07:00",
                "updated_at": "2023-12-31T17:01:41.000+07:00"
            }
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Forget Passsword
### Method: POST
>```
>/auth/forget
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|email|fajarrivaldi2015@gmail.com|text|


### Response: 200
```json
{
    "success": true,
    "message": "Password reset email sent successfully",
    "data": null
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Reset Password
### Method: POST
>```
>/auth/reset
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|token|b05f4375-4dd8-4e91-ae5f-d846e9948872|text|
|email|fajarrivaldi2015@gmail.com|text|
|password|qwertyuiop|text|


### Response: 200
```json
{
    "success": true,
    "message": "Password reset successful",
    "data": null
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Profile 


## End-point: update Profile
### Method: PUT
>```
>/profile
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name|fajar|text|
|email|fajarrivaldi2015@gmail.com|text|
|image|/C:/Users/FAJAR/Downloads/Frame 238442 (1).png|file|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|Mw.JYnmMGOUPQTh9NyxJf4o_gsnf28y3RR4Nj5jCQF-wGD_eswQLrkL5_guKofW|string|


### Response: 200
```json
{
    "success": true,
    "message": "Profile update successfully",
    "data": {
        "id": "de7231ea-5662-4f8e-8436-692f66cb98ab",
        "name": "fajar",
        "email": "fajarrivaldi2015@gmail.com",
        "remember_me_token": null,
        "image": "Cek Bansos.png",
        "role_id": "0dd3daab-7296-4fac-ba80-de144e44f815",
        "created_at": "2023-12-31T17:08:46.000+07:00",
        "updated_at": "2023-12-31T17:30:27.333+07:00"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Change Password
### Method: PUT
>```
>/profile/change-password
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|password|qwertyuiop|text|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|Mw.JYnmMGOUPQTh9NyxJf4o_gsnf28y3RR4Nj5jCQF-wGD_eswQLrkL5_guKofW|string|


### Response: 200
```json
{
    "success": true,
    "message": "Password change successfully",
    "data": {
        "id": "a05d2bbd-0d8f-4835-a8c0-9b50b719901b",
        "name": "fajar",
        "email": "fajarrivaldi2015@gmail.com",
        "remember_me_token": null,
        "image": "Frame 238442 (1).png",
        "role_id": null,
        "created_at": "2023-12-30T17:06:29.000+07:00",
        "updated_at": "2023-12-31T03:15:44.924+07:00"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Role 


## End-point: Read
### Method: GET
>```
>/role
>```
### Query Params

|Param|value|
|---|---|
|page|1|
|limit|1|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "Roles retrieved successfully",
    "data": {
        "meta": {
            "total": 2,
            "per_page": 10,
            "current_page": 1,
            "last_page": 1,
            "first_page": 1,
            "first_page_url": "/?page=1",
            "last_page_url": "/?page=1",
            "next_page_url": null,
            "previous_page_url": null
        },
        "data": [
            {
                "id": "0dd3daab-7296-4fac-ba80-de144e44f815",
                "name": "Admin",
                "created_at": "2023-12-31T17:01:41.000+07:00",
                "updated_at": "2023-12-31T17:01:41.000+07:00"
            },
            {
                "id": "c99dd12a-dc59-43c3-b941-4c26b1dc2eeb",
                "name": "User",
                "created_at": "2023-12-30T16:43:54.000+07:00",
                "updated_at": "2023-12-31T17:05:52.000+07:00"
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Show
### Method: GET
>```
>/role/c99dd12a-dc59-43c3-b941-4c26b1dc2eeb
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "Roles show successfully",
    "data": {
        "id": "c99dd12a-dc59-43c3-b941-4c26b1dc2eeb",
        "name": "User",
        "created_at": "2023-12-30T16:43:54.000+07:00",
        "updated_at": "2023-12-30T16:43:54.000+07:00"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Store
### Method: POST
>```
>/role
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name|Admin|text|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 201
```json
{
    "success": true,
    "message": "Roles created successfully",
    "data": {
        "name": "Admin",
        "id": "0dd3daab-7296-4fac-ba80-de144e44f815",
        "created_at": "2023-12-31T17:01:41.323+07:00",
        "updated_at": "2023-12-31T17:01:41.323+07:00"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update
### Method: PUT
>```
>/role/c99dd12a-dc59-43c3-b941-4c26b1dc2eeb
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name|User|text|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "Roles updated successfully",
    "data": {
        "id": "c99dd12a-dc59-43c3-b941-4c26b1dc2eeb",
        "name": "Admin",
        "created_at": "2023-12-30T16:43:54.000+07:00",
        "updated_at": "2023-12-31T17:03:40.612+07:00"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete
### Method: DELETE
>```
>/role/d52a477f-ea6b-45df-baea-e4d9e0197d64
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "Roles deleted successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: User 


## End-point: Read
### Method: GET
>```
>/user?page=1&limit=10
>```
### Query Params

|Param|value|
|---|---|
|page|1|
|limit|10|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "Roles retrieved successfully",
    "data": {
        "meta": {
            "total": 2,
            "per_page": 10,
            "current_page": 1,
            "last_page": 1,
            "first_page": 1,
            "first_page_url": "/?page=1",
            "last_page_url": "/?page=1",
            "next_page_url": null,
            "previous_page_url": null
        },
        "data": [
            {
                "id": "de7231ea-5662-4f8e-8436-692f66cb98ab",
                "name": "Fajar",
                "email": "fajarrivaldi@gmail.com",
                "remember_me_token": null,
                "image": "Frame 238442 (1).png",
                "role_id": "0dd3daab-7296-4fac-ba80-de144e44f815",
                "created_at": "2023-12-31T17:08:46.000+07:00",
                "updated_at": "2023-12-31T17:08:46.000+07:00",
                "role": {
                    "id": "0dd3daab-7296-4fac-ba80-de144e44f815",
                    "name": "Admin",
                    "created_at": "2023-12-31T17:01:41.000+07:00",
                    "updated_at": "2023-12-31T17:01:41.000+07:00"
                }
            },
            {
                "id": "ee2ebafa-c481-4ac1-b847-97f972de9e31",
                "name": "John Doe",
                "email": "john.doe@example.com",
                "remember_me_token": null,
                "image": null,
                "role_id": null,
                "created_at": "2023-12-30T16:43:54.000+07:00",
                "updated_at": "2023-12-30T16:43:54.000+07:00",
                "role": null
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Show
### Method: GET
>```
>/user/de7231ea-5662-4f8e-8436-692f66cb98ab
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "Roles retrieved successfully",
    "data": {
        "id": "de7231ea-5662-4f8e-8436-692f66cb98ab",
        "name": "Fajar",
        "email": "fajarrivaldi2015a@gmail.com",
        "remember_me_token": null,
        "image": "Cek Bansos.png",
        "role_id": "0dd3daab-7296-4fac-ba80-de144e44f815",
        "created_at": "2023-12-31T17:08:46.000+07:00",
        "updated_at": "2023-12-31T17:14:47.000+07:00",
        "role": {
            "id": "0dd3daab-7296-4fac-ba80-de144e44f815",
            "name": "Admin",
            "created_at": "2023-12-31T17:01:41.000+07:00",
            "updated_at": "2023-12-31T17:01:41.000+07:00"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Store
### Method: POST
>```
>/user
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name|Fajar|text|
|email|fajarrivaldi@gmail.com|text|
|password|qwertyuiop|text|
|image|/C:/Users/FAJAR/Downloads/Frame 238442 (1).png|file|
|roleId|0dd3daab-7296-4fac-ba80-de144e44f815|text|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 201
```json
{
    "success": true,
    "message": "User created successfully",
    "data": {
        "name": "Fajar",
        "email": "fajarrivaldi@gmail.com",
        "image": "Frame 238442 (1).png",
        "role_id": "0dd3daab-7296-4fac-ba80-de144e44f815",
        "id": "de7231ea-5662-4f8e-8436-692f66cb98ab",
        "created_at": "2023-12-31T17:08:46.781+07:00",
        "updated_at": "2023-12-31T17:08:46.782+07:00"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update
### Method: PUT
>```
>/user/de7231ea-5662-4f8e-8436-692f66cb98ab
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name|Fajar|text|
|email|fajarrivaldi2015@gmail.com|text|
|password|password|text|
|image|/C:/Users/FAJAR/Downloads/Cek Bansos.png|file|
|roleId|0dd3daab-7296-4fac-ba80-de144e44f815|text|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "User created successfully",
    "data": {
        "id": "de7231ea-5662-4f8e-8436-692f66cb98ab",
        "name": "Fajar",
        "email": "fajarrivaldi2015@gmail.com",
        "remember_me_token": null,
        "image": "Cek Bansos.png",
        "role_id": "0dd3daab-7296-4fac-ba80-de144e44f815",
        "created_at": "2023-12-31T17:08:46.000+07:00",
        "updated_at": "2023-12-31T17:27:55.062+07:00"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Destroy
### Method: DELETE
>```
>/user/a05d2bbd-0d8f-4835-a8c0-9b50b719901b
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|


### Response: 200
```json
{
    "success": true,
    "message": "User deleted successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
