import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';
import TaskList from './TaskList';
import CategoryButton from './CategoryButton';

const App = () => {
  const categories = [
    { id: 1, name: 'Exercise' },
    { id: 2, name: 'Study' },
    { id: 3, name: 'Code' },
    { id: 4, name: 'Cook' },
    { id: 5, name: 'Read' },
    { id: 6, name: 'Travel' },
    { id: 7, name: 'Work' },
    { id: 8, name: 'Relax' },
  ];

  const tasks = [
    { id: 1, title: 'Go for a run', description: '30 minutes', icon: 'https://example.com/run.png' },
    { id: 2, title: 'Study for exam', description: '2 hours', icon: 'https://example.com/study.png' },
    { id: 3, title: 'Code a new feature', description: '1 hour', icon: 'https://example.com/code.png' },
    { id: 4, title: 'Cook dinner', description: '1 hour', icon: 'https://example.com/cook.png' },
    { id: 5, title: 'Read a book', description: '2 hours', icon: 'https://example.com/read.png' },
    { id: 6, title: 'Travel planning', description: '30 minutes', icon: 'https://example.com/travel.png' },
    { id: 7, title: 'Workout at gym', description: '1 hour', icon: 'https://example.com/gym.png' },
    { id: 8, title: 'Learn a new language', description: '1 hour', icon: 'https://example.com/language.png' },
    { id: 9, title: 'Meet with friends', description: '2 hours', icon: 'https://example.com/friends.png' },
    { id: 10, title: 'Write a blog post', description: '2 hours', icon: 'https://example.com/blog.png' },
    { id: 11, title: 'Practice yoga', description: '30 minutes', icon: 'https://example.com/yoga.png' },
    { id: 12, title: 'Watch a movie', description: '2 hours', icon: 'https://example.com/movie.png' },
    { id: 13, title: 'Play video games', description: '2 hours', icon: 'https://example.com/games.png' },
    { id: 14, title: 'Learn how to play an instrument', description: '1 hour', icon: 'https://example.com/instrument.png' },
    { id: 15, title: 'Volunteer work', description: '2 hours', icon: 'https://example.com/volunteer.png' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
          }