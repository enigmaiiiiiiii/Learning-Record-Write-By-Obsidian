# Javascript Design Pattern - Composite

introduce me the composite design pattern

Composite design patterns is used under which secenarios

## Feature

- kind of structural pattern

## When To Use

- GUI framework

## Structure of Composite Pattern

- [Component](#component)
- [Leaf](#leaf)
- [Composite](#composite)

## Component

- common **interface** or **abstract class** for all component
- define the behavior that both [leaf](#leaf) and [composite](#composite) should implement

## Leaf

- object in Composite design pattern represent a individual object
- do not have any child

## Composite

- hold a collection of child components
- implement the behavior defined by [component](#component) by delegating the operations to its child objects
  - usually contains a **traverse** and **recursive** operation

## Code

```ts
// component
interface Equipment {
  getName(): string;
  setName(name: string): void;
  getNetPrice(): number;
  setNetPrice(netPrice: number): void;
  add(equipment: Equipment): void
  remove(equipment: Equipment): void;
}

// Composite
class CompositeEquipment implements Equipment {
  private name: string;
  private netPrice: number;
  private equipment: Equipment[];

  constructor(name: string) {
    this.name = name;
    this.netPrice = 0;
    this.equipment = [];
  }
  getName(): string{
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
  getNetPrice(): number {
    let total = this.netPrice;
    for (const equipment of this.equipment) {
      total += equipment.getNetPrice();
    }
    return total;
  }
  setNetPrice(netPrice: number): void{
    this.netPrice = netPrice;
  }
  add(equipment: Equipment): void {
    this.equipment.push(equipment);
  }
  remove(equipment: Equipment): void {
    const index = this.equipment.indexOf(equipment);
    if (index !== -1) {
      this.equipment.splice(index, 1);
    }
  }
}

// leaf
class FloppyDisk implements Equipment {
  private name: string;
  private netPrice: number;
  constructor(name: string) {
    this.name = name;
    this.netPrice = 0;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void  {
    this.name = name;
  }
  getNetPrice(): number {
    return this.netPrice;
  }
  setNetPrice(netPrice: number): void {
    this.netPrice = netPrice;

  }

  add(equipment: Equipment): void {
    throw new Error("FloppyDist does not support add operation.");
  }

  remove(equipment: Equipment): void {
    throw new Error("FloppyDisk does not support remove operation");
  }

}

class Chassis extends CompositeEquipment {
  constructor(name: string) {
    super(name);
  }
}

const fd1: Equipment = new FloppyDisk("3.5 in Floppy");
fd1.setNetPrice(19.99);
console.log(`${fd1.getName()}: netPrice=${fd1.getNetPrice()}`);

const fd2: Equipment = new FloppyDisk("5.25 in Floppy");
fd2.setNetPrice(29.99);
console.log(`${fd2.getName()}: netPrice=${fd2.getNetPrice()}`);

const ch: Equipment = new Chassis("PC Chassis");
ch.setNetPrice(39.99);
ch.add(fd1);
ch.add(fd2);
console.log(`${ch.getName()}: netPrice=${ch.getNetPrice()}`);
```