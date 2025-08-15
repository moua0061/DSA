#Problem 1: Update Score
def update_score(scores, players, points):
    print("----------------------------------")
    #find the matching player
    if players in scores:
        #add the points
        scores[players] += points
    else:
        #add the player & points if not exist
        scores[players] = points
    return scores
    pass
scores = {"Alice": 100, "Bob": 90}
update_score(scores, "Alice", 10)
print(scores)
update_score(scores, "Calvin", 20)
print(scores)
update_score(scores, "Calvin", 5)
print(scores)

#Problem 2: Dictionary Intersection
def dict_intersection(d1, d2):
    print("----------------------------------")
    newDict = {}
    for key, value in d1.items():
        if key in d2 and d2[key] == value:
            newDict[key] = value
    return newDict
    pass
d1 = {'a': 1, 'b': 2, 'c': 3}
d2 = {'b': 2, 'c': 4}
print(dict_intersection(d1, d2))

#Problem 3: Filter by Price
def remove_items_below_price(items, price_threshold):
    print("----------------------------------")
    removedItems = []
    #go thru dict
    for item in items:
        #remove all items with values > price threshold 
        price = items[item]
        if price < price_threshold:
            removedItems.append(item)

    #remove items in dict:
    for item in removedItems:
        items.pop(item)
    
    #return list of items removed
    if len(removedItems) > 0:
        return removedItems
    else:
        #if no items satifies conditions, return None
        return None
    pass
items = {"apple": 1.99, "banana": 0.99, "cherry": 3.49, "date": 0.69}
removed_list = remove_items_below_price(items, 1.00)
print(removed_list)
removed_list_two = remove_items_below_price(items, 1.00)
print(removed_list_two)

#Problem 4: Find Odd Occurrences
def find_odd_occurrences(nums):
    print("----------------------------------")
    oddList = []
    #need a dict to store # of occurences
    occurences = {}

    #go thru the nums list
    for num in nums:
        #add the num to the dict and its counts
        if num in occurences:
            occurences[num] += 1
        else:
            occurences[num] = 1

    #go thru the dict
    for key in occurences:
        #check if the value is odd: value % 2 !== 0
        if occurences[key] % 2 != 0:
            #add the key(num) to the odd list
            oddList.append(key)
    #return list of 2 unique nums
    return oddList
nums = [1,4,2,3,2,3,3,4,4,4]
print(find_odd_occurrences(nums))

#Problem 5: Find Mode
def find_mode(lst):
    print("----------------------------------")
    mode = 0
    frequencies = {}
    for num in lst:
        frequencies[num] = frequencies.get(num, 0) + 1
    for value in frequencies.values():
        if value > mode:
            mode = value
    #print('what is frequencies: ', frequencies)
    return mode
    pass
lst = [1,2,3,2,3,3,4,4,4,4]
mode = find_mode(lst)
print(mode)

#Problem 6: How Many Smaller
def smallerNumbersThanCurrent(nums):
    print("----------------------------------")
    results = []
    for i in range(0,len(nums)):
        smallerCount = 0
        currentIVal = nums[i]
        for j in range(0, len(nums)):
            currentJVal = nums[j]
            if currentJVal < currentIVal:
                smallerCount += 1
        results.append(smallerCount)
    return results
    pass
nums = [6,1,2,2,3]
ans = smallerNumbersThanCurrent(nums)
print(ans)
# ans == [4,0,1,1,3]

#Problem 7: Good Pairs
def numIdenticalPairs(nums):
    print("----------------------------------")
    goodPairsCounter = 0
    for i in range(0, len(nums)):
        currentIval = nums[i]
        for j in range(0, len(nums)):
            currentJval = nums[j]
            if currentIval == currentJval and i < j:
                goodPairsCounter += 1
    return goodPairsCounter
    pass
nums = [1,2,3,1,1,3]
print(numIdenticalPairs(nums)) # ans == 4
nums2 = [1,1,1,1]
print(numIdenticalPairs(nums2)) # ans == 6
nums3 = [1,2,3]
print(numIdenticalPairs(nums3))# ans == 0