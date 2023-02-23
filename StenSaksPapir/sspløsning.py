import random

moves = ['sten', 'saks', 'papir']

def get_player_move():
    while True:
        player_move = input("Vælg dit træk (sten/saks/papir): ")
        if player_move in moves:
            return player_move
        else:
            print("Ugyldigt træk. Prøv igen.")

def get_computer_move():
    computer_move = random.choice(moves)
    return computer_move

def determine_winner(player_move, computer_move):
    if player_move == computer_move:
        return "Uafgjort"
    elif (player_move == 'sten' and computer_move == 'saks' or
          player_move == 'saks' and computer_move == 'papir' or
          player_move == 'papir' and computer_move == 'sten'):
        return "Spilleren vinder!"
    else:
        return "Computeren vinder!"

def play_game():
    print("Velkommen til Sten-Saks-Papir!")
    while True:
        player_move = get_player_move()
        computer_move = get_computer_move()
        print("Spilleren valgte: " + player_move)
        print("Computeren valgte: " + computer_move)
        print(determine_winner(player_move, computer_move))
        play_again = input("Vil du spille igen? (ja/nej): ")
        if play_again.lower() != 'ja':
            break
    print("Tak for spillet!")

play_game()