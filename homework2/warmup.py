import string
import math
import random

def change(amount):
    if amount < 0:
        raise ValueError('amount cannot be negative')
    coins = [25, 10, 5, 1]
    result = []
    for coin_value in coins:
        number_coin, amount = divmod(amount, coin_value)
        result.append(number_coin)
    return tuple(result)

def strip_quotes(s):
    strippedQuotes = s.replace('"', '').replace('\'', '')
    return strippedQuotes

def scramble(s):
    return ''.join(random.sample(s, len(s)))

def say(new_words=None):
    def chain(next_word=None):
        if next_word is None:
            return new_words
        return say(new_words + " " + next_word)
    if new_words is None:
        return ''
    return chain

def triples(limit):
    result = []
    for a in range(1, limit + 1):
        for b in range(a + 1, limit + 1):
            for c in range(b + 1, limit + 1):
                if a * a + b * b == c * c:
                    result.append((a, b, c))
    return result

def powers(base, limit):
    starting_base = 1
    while starting_base <= limit:
        yield starting_base
        starting_base *= base

def interleave(words, *more_words):
    first_length = len(words)
    second_length = len(more_words)
    max_length = max(first_length, second_length)
    result = []
    for index in range(0, max_length):
        if index < first_length:
            result.append(words[index])
        if index < second_length:
            result.append(more_words[index])
    return result

def Cylinder(radius, height):
    pass

def make_crypto_functions(key, iv):
    pass

def random_name(r):
    pass
