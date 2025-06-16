provider "vercel" {
  api_token = var.vercel_api_token
}

resource "vercel_project" "www" {
  name = "diboas-www"
  framework = "nextjs"
  root_directory = "apps/www"
}