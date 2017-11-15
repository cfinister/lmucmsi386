#include <iostream>
#include <string>
#include <map>
#include <vector>
using namespace std;

string normalize(string s){
    string result;
    char c;

    for (int i = 0; i < s.length(); i++){
        c = s[i];
        c = tolower(c);
        if (isalpha(c) || isblank(c))
            result += c;
    }

    return result;
}

int main(void)
{
    string s;
    map<string, int> counters;

    while (cin >> s)
        ++counters[normalize(s)];

    for (map<string, int>::const_iterator it = counters.begin();
            it != counters.end(); ++it)
    {
        cout << it->first << "\t" << it->second << endl;
    }

    return 0;
}
