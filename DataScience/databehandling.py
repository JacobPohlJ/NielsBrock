# Part 1: Processing and cleaning
# Read the CSV file
# Manually inspect the data to get an idea of potential problems that need to be fixed.
# Clean the data. First, we'll try to do this manually, by writing our own clean_text() function that uses regular expressions. The function should take raw text as input and return a version of the text with the following modifications:
# all words must be lowercased
# it should not contain multiple white spaces, tabs or new lines
# numbers, dates, emails and urls should be replaced by "<NUM>", "<DATE>", "<EMAIL>" AND "<URL>", respectively. Note that replacing dates with <DATE> is particularly tricky as dates can be expressed in many forms. It's ok to to just choose one or a few common date formats present in the data set and only replace those. (Be careful about tokenizing <> symbols because these are punctuation in most Tokenizers).
# Now, let's try to use a library for cleaning the data. The clean-text module (https://pypi.org/project/clean-text/ Links to an external site.) provides out-of-the-box functionality for much of the cleaning we did in the previous exercise (pip install clean-text). Use it to implement the same cleaning steps as in your own clean_text implementation.
# Now that we are done cleaning, we can start process the text. The nltk library (https://www.nltk.org/ Links to an external site.) has built-in support for many of the most common operations. Try to:
# Tokenize the text.
# Remove stopwords and compute the size of the vocabulary. Compute the reduction rate of the vocabulary size after removing stopwords.
# Remove word variations with stemming and compute the size of the vocabulary. Compute the reduction rate of the vocabulary size after stemming.
 

# Part 2: Exploratory analysis
# Next, perform an exploratory evaluation of the cleaned data and report the results. The exploration can include (but need not be limited to):

# counting the number of URLs in the content
# counting the number of dates in the content
# counting the number of numeric values in the content
# determining the 100 more frequent words that appear in the content
# plotting the frequency of the 10000 most frequently occurring words (do you seen any interesting patterns?)
# run the analysis in point 4 and 5 both before and after removing stopwords and applying stemming: do you see any difference?