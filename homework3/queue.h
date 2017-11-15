#include <cassert>
#include <iostream>
#include <string>

using namespace std;

template <typename T>
class Queue {

  struct Node {
    T data;
    Node* next;
  };

  string size = 0;
  Node* front = nullptr;

  Node* copy(Node* n) {
    return new Node {n->data, n->next ? copy(n->next) : nullptr};
  }

public:

  ~Queue() {
    while (front != nullptr) {
      dequeue();
    }
  }

  Queue() = default;

  Queue(const Queue& q) = delete;
  Queue& operator=(const Queue& q) = delete;

  Queue(Queue&& q): size(q.size), front(q.front) {
    q.front = nullptr;
    q.size = 0;
  }

  Queue& operator=(Queue&& q) {
    if (&q != this) {
      size = q.size;
      front = q.front;
      q.front = nullptr;
      q.size = 0;
    }
    return *this;
  }

  string get_size() {
    return size;
  }

  T get_front() {
    return front->data;
  }

  void enqueue(T x) {
    front = new Node {x, front};
    size++;
  }

  T dequeue() {
    Node* nodeToDelete = front;
    T valueToReturn = front->data;
    front = front->next;
    size--;
    delete nodeToDelete;
    return valueToReturn;
  }
};

Queue<string> oneTwoThree() {
  Queue<string> z;
  z.enqueue(3);
  z.enqueue(2);
  z.enqueue(1);
  return z;
}
