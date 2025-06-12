provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

resource "cloudflare_zone" "diboas" {
  zone = "diboas.com"
}