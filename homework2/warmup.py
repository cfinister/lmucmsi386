def change(amount):
    # return (0, 0, 0, 0)
    coins = [25, 10, 5, 1]
    result = {}
    for coin_value, coin_name in coins:
        if amount >= coin_value:
            number_coin, amount = divmod(amount, coin_value)
            result[coin_name] = number_coin
    return result

def strip_quotes(s):
    pass

def scramble(s):
     pass

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
