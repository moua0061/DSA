#Problem 1: Choose Your Pokemon
def choose_pokemon(my_pokemon):
	print("----------------------------------")
	for pokemon in my_pokemon:
		print(f"{pokemon} I choose you!")
pokemons = ['Pikachu', 'Charizard', 'Eevee']
print(choose_pokemon(pokemons))

#Problem 2: Rotate Left
def rotate_left(s, n):
	print("----------------------------------")
	str = s[n:] + s[0:n]
	return str
s = "rotation"
print(rotate_left(s, 2))

#Problem 3: First Duplicate
def first_repeated_char(s):
    pass
s = "hello world"
s2 = "aAbBCC"
s3 = "abcdefg"

print(first_repeated_char(s))
print(first_repeated_char(s2))
print(first_repeated_char(s3))