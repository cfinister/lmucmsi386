#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int countWord(string word);
int main()

{
    string inputstring;
    cout << endl;
    getline(cin, inputstring);
    cout << countWord(inputstring) << endl;


    cin.get();
    return 0;
}
int countWord(string word)
{
    int words(0);
    int spaces(0);
    for (int i = 0; i<word.length(); i++)
    {
        if((!isspace(word[i]))&&(isspace(word[i+1]))||(word[i+1] == '\0'))
        {
            words++;
        }
        if(isspace(word[i]))
        {
            spaces++;
            if(spaces == word.length())
            {
                words = 0;
            }
        }
    }
    return words;
}
