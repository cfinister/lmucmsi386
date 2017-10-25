#include <cassert>

int main() {
  assert(say() == "");
  assert(say("hello")() == "hello");
  assert(say("how")("are")("you")() == "How are you");
}
