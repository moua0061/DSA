def one(word):
    char_count = {}
    for char in word:
        if char not in char_count:
            char_count[char] = 1
        else:
            char_count[char] += 1
    char_count['e'] += 2
    return char_count
    pass
word = "encourage"
print(one(word))

greeting = "Hello, World!"
#greeting[7] = 'w'
#print(greeting)
#type error

s = 'Python'
reversed_s = s[::-1]
result = reversed_s + " rocks!" #works: gnohtyP rocks!
print(result)

date = "22-06-2025"
month = date[3:5]
is_valid_month = int(month) >= 1 and int(month) <= 12
print(is_valid_month)
#day, month, year = date.split('-')
#is_valid_month = 1 <= month <= 12
#print(is_valid_month)
#is_valid_month = 1 < int(date[3:5]) < 12
#print(is_valid_month)
#month = date.split('-')[1]
#is_valid_month = month > 0 and month < 13
#print(is_valid_month)

def char_count(str):
    # Write your code here
    str_new = str.split(" ")
    new_str = "".join(str_new)
    dups = {}
    for char in new_str:
        if char not in dups:
            dups[char.lower()] = 1
        else:
            dups[char] += 1
    return dups
    pass
str = "Hello World"
print(char_count(str))

def ransom_note(message, magazine):
    # Write your code here
    #print('what is message:', message)
    #print('what is magazine:', magazine)
    for char in message:
        if char in magazine:
            continue
        else:
            return False
    return True
    pass
message = "world"
megazine = "wadorable"
print(ransom_note(message, megazine))