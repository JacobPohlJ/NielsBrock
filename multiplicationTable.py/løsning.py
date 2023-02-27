# løsning

n = int(input("Indtast et heltal: "))
for i in range(1, n+1):
    for j in range(1, n+1):
        produkt = i * j
        print(f"{i} * {j} = {produkt}")