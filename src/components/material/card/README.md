# Material Card
## Introduction
This is a wrapper that allows to wrap content with Card like component that have a look and feel of elevated card.

#### Image of a Material Card

![Image of Material Card in Action](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/material/Card/screenshots/.png?raw=true)

## Types
Material Card comes with three types : __*Default*__ (Colour: White); __*Dark*__ (Colour: DarkCyan(#255763)); and __*Extra Dark*__ (Colour: Black).

### Default

> Usage
```javascript
    <MaterialCard>
        This is Default Card
    </MaterialCard>
```
> Result 
![Image of Material Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/material/Card/screenshots/MaterialCard.png?raw=true)


### Dark

> Usage
```javascript
    <MaterialCard
        type='dark'
    >
        This is Dark Card
    </MaterialCard>
```
> Result 
![Image of Dark Material Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/material/Card/screenshots/DarkCard.png?raw=true)

### Extra Dark

> Usage
```javascript
    <MaterialCard
        type='xdark'
    >
        This is Extra Dark Card
    </MaterialCard>
```
> Result 
![Image of Extra Dark Material Card in](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/material/Card/screenshots/ExtraDarkCard.png?raw=true)

## Animation
Material Card is equipped with prebuilt animations, (currently only shadow animation).

### Shadow Animation

> Usage
```javascript
    <MaterialCard
        animate='shadow'
    >
        This is Default Card
    </MaterialCard>
```
> Result 
![Image of Material Card Shadow Animation](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/material/Card/screenshots/MaterialCard.gif?raw=true)


- __* Extra styling of positioning and margin is added to increase size of card.__

- __* By Default, Card will closely wrap the child component.__

- Any valid react component can be wrapped in this Card.