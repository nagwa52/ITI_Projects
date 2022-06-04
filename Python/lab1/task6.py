def character_indexes():
    match = input("Enter your value: ")
    string = "Hello World! This is an example sentence with no meaning."
    indexes_of_match = []

    for index, character in enumerate(string):
        if character == match:
            indexes_of_match.append(index)
    print (indexes_of_match)
character_indexes()