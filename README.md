# hyper-ipc-quickjs-woker
QuickJS Hyper-IPC-Secure Worker Tool is a powerful utility for running QuickJS code securely within a hyper-ipc-secure environment. This README will guide you through the setup and usage of the tool.

Before using this tool, ensure you have the following prerequisites installed:

Node.js (16+)

# Installation

To install the QuickJS Hyper-IPC-Secure Tool, follow these steps:

There is an example in examples/
In this example, we:

Generate a key pair for secure communication.
Expose a remote executor and services.
Serve a 'hello.world' service that can be invoked remotely by QuickJS code.
Use the tool to execute QuickJS code remotely.
Have the quickjs code execute hello.world from inside its environment
