from typing import Literal, TypedDict

from django.http import HttpRequest, JsonResponse


class Fruit(TypedDict):
    name: str
    weight: int
    color: Literal["Yellow", "Red", "Green"]


def send_fruits(request: HttpRequest) -> JsonResponse:
    fruits: list[Fruit] = [
        {"name": "Banana", "weight": 24, "color": "Yellow"},
        {"name": "Apple", "weight": 46, "color": "Red"},
        {"name": "Mini-Apple", "weight": 24, "color": "Green"},
        {"name": "Lemon", "weight": 32, "color": "Yellow"},
        {"name": "Tomaten", "weight": 12, "color": "Red"},
    ]

    return JsonResponse(fruits, safe=False)
