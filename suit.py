import random

suits = ["Spades", "Hearts", "Clubs", "Diamonds"]

random_suit = random.randint(0, 3)

suit = suits[random_suit]

print("Your suit is", suit)
