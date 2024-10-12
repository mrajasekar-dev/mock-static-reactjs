# Experimenting with React in Salesforce

This repository is dedicated to **experimenting with a static HTML file** that utilizes the **React CDN** to create a component designed for seamless integration within Salesforce. The goal is to develop a component that operates with minimal security restrictions, allowing for greater flexibility in building user interfaces.

## Overview

Salesforce offers various mechanisms for integrating third-party libraries like React into its ecosystem. This project leverages the **Lightning Container Component**, which provides a secure way to host applications built with frameworks such as React, Angular, and others. By using this component, developers can encapsulate their applications in an iframe, ensuring that they operate within the necessary security constraints while still being able to communicate with Salesforce's backend services.

## Key Features

- **Static HTML File**: The project begins with a simple static HTML file that includes the React library via CDN.
- **Component Creation**: Focus on creating reusable React components that can interact with Salesforce data and services.
- **Minimal Security Restrictions**: Designed to function without extensive security hurdles, making it easier to prototype and test functionalities.

## Why Use React with Salesforce?

React is an excellent choice for building dynamic user interfaces due to its flexibility and performance. Integrating React into Salesforce allows for:

- **Custom UI Components**: Create tailored components that enhance user experience while maintaining consistency with Salesforce's Lightning Design System (SLDS).
- **Efficient Data Handling**: Utilize Salesforce’s REST and Apex APIs for real-time data fetching and updates.
- **Component Reusability**: Build reusable components that streamline development and maintenance processes.

## Getting Started

To set up your environment:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
