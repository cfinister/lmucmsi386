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
    from itertools import permutations
    if len(s) != 2:
    for word in ( '' .join(p) for p in permutations(s[1])):

def say(new_words):
    pass

def triples(t):
    pass

def powers(base, limit):
    pass

def interleave(words, *more_words):
    pass

def Cylinder(radius, height):
    pass

def make_crypto_functions(key, iv):
    pass

def random_name(r):
    pass
