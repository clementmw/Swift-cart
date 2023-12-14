def zero_fuel(distance_to_pump, mpg, fuel_left):
    miles = mpg * fuel_left
    if miles >= distance_to_pump: # if the miles is greater or equal to pump then it can reach the pump
        return True
    else:
        return False

print(zero_fuel(34,20,2))

#alternate method

   