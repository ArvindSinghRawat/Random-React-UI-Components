# Neumorphic Card
## Introduction
This is a wrapper that allows to wrap content with a component that gives look and feel of contour of surface.

Each Card comes with inset and outset classes. 
> - __*Default class*__ resembles a surface protruding from the base.
> - __*Inset class*__ resembles a surface sunken in the base.
>   - Add ```inset-``` in front of desired type attribute.

#### Image of a Neumorphic Card

> ![Image of Neumorphic Card in Action](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/neumorphic/Card/screenshots/DefaultNeumorphicCard.png?raw=true)

## Notes
- It is highly recommended to use the same background colour as colour shades on Card.
- User can also assign their own styles, to create unique Neumorphic Card.
- This effect is created by adding two differently coloured shadows on diagonally opposite corners.
- One of the corner should have light coloured shadow as compared to the Background while other one should have darker shadow.

## Types
Neumorphic Card comes with four types : 
- __*Default*__ (Colour: White);
- __*Light*__ (Colour: LightCyan(#e0e5ec)); 
- __*Dark*__ (Colour: DarkCyan(#255763)); 
- and __*Extra Dark*__ (Colour: Black).

### Default

#### Default type

> Usage
    
```javascript
    <NeumorphicCard>
        This is Neumorphic Card
    </NeumorphicCard>
```
> Result 
> ![Image of Neumorphic Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/neumorphic/Card/screenshots/DefaultNeumorphicCard.png?raw=true)

#### Inset type

> Usage
    
```javascript
    <NeumorphicCard type="inset">
        This is Neumorphic Card
    </NeumorphicCard>
```
> Result 
> ![Image of Neumorphic Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/neumorphic/Card/screenshots/InsetDefaultNeumorphicCard.png?raw=true)

### Light

#### Default
> Usage
    
```javascript
    <NeumorphicCard
        type='light'
    >
        This is Neumorphic Card
    </NeumorphicCard>
```
> Result 
> ![Image of Neumorphic Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/neumorphic/Card/screenshots/LightNeumorphicCard.png?raw=true)

#### Inset

> Usage
    
```javascript
    <NeumorphicCard
        type='inset-light'
    >
        This is Neumorphic Card
    </NeumorphicCard>
```
> ![Image of Neumorphic Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/neumorphic/Card/screenshots/InsetLightNeumorphicCard.png?raw=true)

### Dark

#### Default
> Usage
    
```javascript
    <NeumorphicCard
        type='dark'
    >
        This is Neumorphic Dark Card
    </NeumorphicCard>
```
> Result 
> ![Image of Neumorphic Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/neumorphic/Card/screenshots/DarkNeumorphicCard.png?raw=true)

#### Inset

> Usage
    
```javascript
    <NeumorphicCard
        type='inset-dark'
    >
        This is Neumorphic Dark Card
    </NeumorphicCard>
```
> ![Image of Neumorphic Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/neumorphic/Card/screenshots/InsetDarkNeumorphicCard.png?raw=true)


### Extra Dark

#### Default
> Usage
    
```javascript
    <NeumorphicCard
        type='xdark'
    >
        This is Neumorphic Extra Dark Card
    </NeumorphicCard>
```
> Result 
> ![Image of Neumorphic Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/neumorphic/Card/screenshots/ExtraDarkNeumorphicCard.png?raw=true)

#### Inset

> Usage

```javascript
    <NeumorphicCard
        type='inset-xdark'
    >
        This is Neumorphic Extra Dark Card
    </NeumorphicCard>
```
> ![Image of Neumorphic Card](https://github.com/ArvindSinghRawat/Random-React-UI-Components/blob/master/src/components/neumorphic/Card/screenshots/InsetExtraDarkNeumorphicCard.png?raw=true)



- __* Extra styling of positioning and margin is added to increase size of card.__

- __* By Default, Card will closely wrap the child component.__

- Any valid react component can be wrapped in this Card.
