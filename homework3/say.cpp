#include <cassert>

int main() {
  assert(say() == "");
  assert(say("hello")() == "hello");
  assert(say("how")("are")("you")() == "How are you");
}

#define O(P)operator()(P){return{P+a};}int
struct F{F O(int(m))O()a;}f;
