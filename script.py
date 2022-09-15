from concurrent.futures.thread import _worker
from encodings.utf_8 import encode
from operator import index
import os
import random

file = open('words-multiplication/words.txt', 'r', encoding='utf-8')
words = file.readlines()

index_list = random.sample(range(0, len(words)), 2)
first_random_word = words[index_list[0]].strip()
second_random_word = words[index_list[1]].strip()

print(first_random_word + " x " + second_random_word)
