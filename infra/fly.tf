provider "fly" {
  fly_api_token = var.fly_api_token
}

resource "fly_app" "api" {
  name = "diboas-api"
}