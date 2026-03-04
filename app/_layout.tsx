import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';
import { Slot, useRouter, usePathname } from 'expo-router';
import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import { AuthProvider } from '../context/AuthContext';

export default function AppLayout() {
  const pathname = usePathname();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Determine title based on current path
  let title = 'MEMESAĞLIĞIM';
  let showBack = false;

  if (pathname === '/egitimler') {
    title = 'Eğitimler';
    showBack = true;
  } else if (pathname === '/gunluk-ipucu') {
    title = 'Günlük İpucu';
    showBack = true;
  } else if (pathname === '/formlar') {
    title = 'Formlar ve Ölçekler';
    showBack = true;
  } else if (pathname === '/bilgilerim') {
    title = 'Bilgilerim';
    showBack = true;
  } else if (pathname === '/nasil-hissediyorum') {
    title = 'Nasıl Hissediyorum?';
    showBack = true;
  } else if (pathname === '/hakkimizda') {
    title = 'Hakkımızda';
    showBack = true;
  } else if (pathname === '/kaynakca') {
    title = 'Kaynakça';
    showBack = true;
  } else if (pathname === '/login') {
    // We don't want the global layout wrapper for the login screen ideally, 
    // or we can just hide Header and BottomBar.
    return (
      <AuthProvider>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor="#E91E63" />
          <Slot />
        </SafeAreaView>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor="#E91E63" />
        <Header
          title={title}
          showBack={showBack}
          onOpenMenu={() => setSidebarVisible(true)}
        />
        <View style={styles.content}>
          <Slot />
        </View>
        <BottomBar />
        <Sidebar
          visible={sidebarVisible}
          onClose={() => setSidebarVisible(false)}
        />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
