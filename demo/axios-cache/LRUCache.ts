// ref: https://github.com/jin5354/axios-cache-plugin/blob/master/src/lru.js

class LinkNode {
  key: any;
  value: any;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

type NodeEle = {
  next?: NodeElement,
  prev?: NodeElement,
  key: string | number,
  value: any,
};

type NodeElement = NodeEle | null

export class LRUCache {
  hashMap: { [key: string]: NodeElement };
  num = 0;
  tail: NodeElement;
  head: NodeElement;
  capacity: any;

  constructor(capacity) {
    this.capacity = capacity;
  }

  get(key) {
    if (this.hashMap[key] !== undefined) {
      this.addToTail(this.hashMap[key]);
      return this.hashMap[key]!.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (this.hashMap[key] !== undefined) {
      this.hashMap[key]!.value = value;
      this.addToTail(this.hashMap[key]);
      return;
    }
    if (this.num >= this.capacity) {
      // 删掉最近最少访问的，再添加..
      this.removeLRU();
      this.hashMap[key] = new LinkNode(key, value);
      this.addToTail(this.hashMap[key]);
      this.num++;
      return;
    }
    this.hashMap[key] = new LinkNode(key, value);
    this.addToTail(this.hashMap[key]);
    this.num++;
  }

  /**
   * @function 添加到尾部
   */
  addToTail(node: NodeElement) {
    // 添加的第一个元素。初始化 head 和 tail
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    // 该元素本就是 tail，不做变化。
    if (this.tail === node) {
      return;
    }
    let prev = node!.prev;
    let next = node!.next;

    // 该元素在中间，移除，修正前后节点
    if (prev && next) {
      prev.next = next;
      next.prev = prev;
      node!.next = null;
    }

    // 该元素是 head，放到最后面。head 更新
    if (!prev && next) {
      next.prev = null;
      this.head = next;
    }

    // 更新 tail
    this.tail.next = node; // 添加绑定关系
    node!.prev = this.tail;
    this.tail = node; // 更新指针
    node!.next = null;
  }

  removeLRU() {
    let target = this.head;
    let next = target!.next;
    if (next) {
      next.prev = null;
      this.head = next;
    } else {
      this.head = null;
      this.tail = null;
    }

    delete this.hashMap[target!.key];
    this.num--;
  }
}
