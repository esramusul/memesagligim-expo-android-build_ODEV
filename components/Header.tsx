import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface HeaderProps {
    title: string;
    showBack?: boolean;
    onOpenMenu?: () => void;
}

export default function Header({ title, showBack = false, onOpenMenu }: HeaderProps) {
    const router = useRouter();

    return (
        <View style={styles.header}>
            {showBack ? (
                <TouchableOpacity style={styles.leftButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.leftButton} onPress={onOpenMenu}>
                    <Ionicons name="menu" size={28} color="white" />
                </TouchableOpacity>
            )}
            <Text style={styles.title}>
                {title}
            </Text>
            {/* Empty placeholder to balance the left button */}
            <View style={styles.placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#E91E63',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        elevation: 4, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    leftButton: {
        position: 'absolute',
        left: 20,
        zIndex: 1,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleWithBack: {
        // We already use pos:absolute for backButton and justify:center for header, 
        // so title stays centered natively.
    },
    placeholder: {
        width: 24, // Same as back button icon to keep center balance
    },
});
