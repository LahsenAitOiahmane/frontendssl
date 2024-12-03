from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/assets", StaticFiles(directory="assets"), name="assets")

templates= Jinja2Templates(directory="./")

@app.get("/", response_class=HTMLResponse)
async def homepage(request: Request):
    return templates.TemplateResponse("index.html", {"request":request})


# @app.get("/login", response_class=HTMLResponse)
# async def homepage(request: Request):
#     return templates.TemplateResponse("login.html", {"request":request})
# @app.get("/signup", response_class=HTMLResponse)
# async def signup(request: Request):
#     return templates.TemplateResponse("signup.html", {"request":request})

# @app.get("/forgot-password", response_class=HTMLResponse)
# async def forgot_password(request: Request):
#     return templates.TemplateResponse("forgot-password.html", {"request":request})

# @app.get("/reset-password", response_class=HTMLResponse)
# async def reset_password(request: Request):
#     return templates.TemplateResponse("reset-password.html", {"request":request})


