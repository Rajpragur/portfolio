---
layout: project
type: project
image: img/behavioural_logo_logo.jpg
title: "AI for Behavioral Prediction"
date: 2025-02-16
published: false
labels:
  - Reinforcement Learning
  - AI & Neuroscience
  - Human Activity Recognition
summary: "A reinforcement learning-based AI model that predicts human activity sequences based on prior motion patterns."
---

## Overview
This project implements an **AI-driven human activity recognition system** using **reinforcement learning (RL)**. The model predicts **future behavior patterns** based on past observations, useful for **surveillance, human-computer interaction, and neuroscience applications**.

## Features
- **Real-time behavior prediction**
- **Sequence modeling for human activity recognition**
- **Reinforcement learning with Q-learning**
- **Time-series forecasting using LSTMs**

## Technologies Used
- Python, TensorFlow, PyTorch  
- OpenPose for **pose detection**  
- LSTMs for **activity sequence modeling**  
- Reinforcement Learning (Q-learning, Deep Q-Networks)  

## Implementation Steps
1. **Train a model on labeled human activity datasets** (UCF101, Kinetics).  
2. **Extract movement features** using OpenPose & track human poses.  
3. **Use RL to predict next movement** based on action history.  
4. **Optimize model performance** by fine-tuning hyperparameters.  

## Results
- Achieved **90%+ accuracy** in predicting next activity sequence.  
- Successfully tracked **human movement patterns over time**.  
- Improved real-time **behavior forecasting for interactive AI systems**.  

## Next Steps
- Implement **gesture-based AI interactions** for robotics.  
- Train on **custom datasets** for real-world applications.  

## GitHub Repository
[🔗 Project Code](https://github.com/rajpragur/behavior-prediction-ai)

## Screenshots
![Behavior Prediction AI](../img/behavior_prediction_demo.png)
