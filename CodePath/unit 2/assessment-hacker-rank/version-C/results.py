my_dict = {1: 'Mae Jemison', 2: 'Ada LoveLace', 3: 'Alan Turing'}
#print(my_dict[0]) #gives KeyError

def invert_dictionary(original):
    # Write your code here
    revert = {}
    for key, value in original.items():
        if value in revert:
            revert[value] += key
        else:
            revert[value] = key
    return revert
    pass
original1 = {'apple': 1, 'banana': 2, 'cherry': 3}
print(invert_dictionary(original1))
original2 = {4: 'cat', 5: 'dog', 6: 'fish'}
print(invert_dictionary(original2))


#write a function that takes 2 lists of integers and determine if each unique value in the first list
#occurs an equal number of times as the same value in the second list.
#the function should return True if the 2 lists have the esame frequency distribution, and false otherwise
def frequency_equality(lst1, lst2):
    # Write your code here
    lst1Occurrences = {}
    lst2occureneces = {}
    
    if len(lst2) == len(lst1):
        #do this
        #loop thru list 1 to get its occurences
        for num in lst1:
            if num in lst1Occurrences:
                lst1Occurrences[num] += 1
            else:
                lst1Occurrences[num] = 1
        
        #loop thru list 1 to get its occurences
        for num in lst2:
            if num in lst2occureneces:
                lst2occureneces[num] += 1
            else:
                lst2occureneces[num] = 1
        
        #then loop thru the occurences to see if their values match
        for key in lst1Occurrences:
            #print('what is key in lst1Occurences:', key)
            #if the key exists in list2 occurences:
            if key in lst2occureneces:
                #does the value in list 1 match value in list 2
                if lst1Occurrences[key] == lst2occureneces[key]:
                    #if yes, continue the loop
                    continue
                else:
                    #if no, return false
                    return False
    else:
        return False
    
    return True
    #from claude:
    count1 = {}
    count2 = {}
    
    for num in lst1:
        count1[num] = count1.get(num, 0) + 1
    
    for num in lst2:
        count2[num] = count2.get(num, 0) + 1
    
    # Compare the dictionaries directly
    return count1 == count2
    pass
lst1 = [1, 2, 3, 4, 4, 5]
lst2 = [2, 3, 1, 4, 4, 5]
print(frequency_equality(lst1, lst2))

#test case 3
lst3 = [1, 2, 3, 3, 2, 7, 6, 9, 6]
lst4 = [1, 2, 3, 3, 2, 7, 9, 6, 6, 5]
print(frequency_equality(lst3, lst4))

#test case 5
lst5 = [1, 2, 3, 4, 4, 5]
lst6 = [2, 3, 1, 4, 4, 5]
print(frequency_equality(lst5, lst6))

list7 = [0, 0, 1, 1, 2, 2, 3, 3]
list8 = [0, 0, 2, 2, 1, 1, 3, 5]
print(frequency_equality(list7, list8))

list9 = [1, 2, 3, 3, 2, 7, 6, 9, 6]
list10 = [1, 2, 3, 3, 2, 7, 9, 6, 6, 5]
print(frequency_equality(list9, list10))

list11 = [8, 4, 7, 5, 6, 8, 2, 3, 3, 4, 5, 9]
list12 = [2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9]
print(frequency_equality(list11, list12))