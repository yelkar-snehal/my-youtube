## npx create-react-app name

npx executes the specified command, x is for executing

## report web vitals

measure, analyze, and send metrics of the application

## react strict mode

detect unexpected side-effects, unsafe life cycles, deprecated DOM, etc

(same as fragments) won't render anything visually different

## tailwind css

dev dependency

no need for post-CSS since CRA takes care of understanding the tailwind's code

Just init tailwind to create a config

## react env

In CRA the REACT*APP* prefix is a must not a should. See the second link provided by op: "Apart from a few built-in variables (NODE*ENV and PUBLIC_URL), variable names must start with REACT_APP* to work."

## react-router DOM

Router Provider's createRouter's return object behaves according to the route/path
children are rendered in the outlet
outlet is in the wrapper of the main element which renders other compoment as per the app router's path

## URLSearchParams

browser native funtion
prototype like a map function

## cache

[] -> time complexity O(n), because of minimum iteration
{} or map -> time complexity O(1), because of the dot operator or getter

## redux

base state object shouldn't be mutated
inner nested objects can be mutated
or return a different state entirely by copying the whole obj
