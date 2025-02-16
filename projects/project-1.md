---
layout: project
type: project
image: images/video_logo_logo.jpg
title: "Object Detection for Video AI"
date: 2025-02-16
published: true
labels:
  - Computer Vision
  - Deep Learning
  - YOLO
summary: "An AI-powered object detection system using YOLOv5 to recognize and track objects in real-time videos."
---

## Overview
This project implements **real-time object detection** using the **YOLOv5 model**. The system detects and tracks multiple objects in a video feed with **bounding boxes and confidence scores**.

## Features
- **YOLOv5 for object detection**
- **Live video processing using OpenCV**
- **Bounding box tracking with SORT algorithm**
- **Custom dataset fine-tuning for improved accuracy**

## Technologies Used
- Python, OpenCV, TensorFlow, PyTorch
- YOLOv5 Pre-trained Models
- Simple Online and Realtime Tracker (SORT)

## Implementation Steps
1. **Load pre-trained YOLOv5 model** for object detection.
2. **Process video frames in real-time** and detect objects.
3. **Apply SORT algorithm** to track objects across frames.
4. **Fine-tune YOLOv5 on a custom dataset** for better accuracy.

## Results
- Achieved **real-time object detection** with an FPS > 20.
- Successfully tracked multiple objects over **live webcam feed**.
- Custom fine-tuning improved detection accuracy by **10-15%**.

## Next Steps
- Deploy as a **web app using Flask/Streamlit**.
- Experiment with **YOLOv8 for better accuracy**.

