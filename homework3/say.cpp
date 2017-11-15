#include <iostream>
#include <cassert>
#include <string>

using namespace std;

struct Chain {
  string str = "";

  Chain operator()(string value) {
    return Chain { str + (str == "" ? "" : " ") + value };
  }

  string operator()() {
    return str;
  }
};

Chain say;

int main() {
  assert(say() == "");
  assert(say("hello")() == "hello");
  assert(say("how")("are")("you")() == "how are you");
  cout << "Yep, all tests passed, LIT AF!\n";
}
