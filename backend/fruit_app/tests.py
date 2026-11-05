from django.test import SimpleTestCase
from django.urls import resolve, reverse

from .views import send_fruits


class SendFruitsTests(SimpleTestCase):
    def test_url_resolves_to_view(self):
        self.assertEqual(reverse("send_fruits"), "/fruits/")
        self.assertIs(resolve("/fruits/").func, send_fruits)

    def test_returns_json_with_five_fruits(self):
        response = self.client.get("/fruits/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response["Content-Type"], "application/json")

        fruits = response.json()
        self.assertIsInstance(fruits, list)
        self.assertEqual(len(fruits), 5)
        for fruit in fruits:
            self.assertEqual(set(fruit), {"name", "weight", "color"})
            self.assertIsInstance(fruit["name"], str)
            self.assertIsInstance(fruit["weight"], (int, float))
            self.assertIsInstance(fruit["color"], str)

    def test_unknown_url_returns_404(self):
        self.assertEqual(self.client.get("/nope/").status_code, 404)

    def test_cors_header_for_frontend_origin(self):
        response = self.client.get("/fruits/", headers={"Origin": "http://localhost:5173"})
        self.assertEqual(response["Access-Control-Allow-Origin"], "http://localhost:5173")
