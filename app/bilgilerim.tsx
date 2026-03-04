import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

export default function BilgilerimScreen() {
    const { email: authEmail, name: authName, setName: setAuthName, setEmail: setAuthEmail } = useAuth();

    // In a real app, these would come from an authentication context/API
    const [name, setName] = useState(authName || '');
    const [email, setEmail] = useState(authEmail || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleUpdate = () => {
        setAuthName(name);
        setAuthEmail(email);
        Alert.alert('Bilgi', 'Bilgileriniz güncellendi.');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerArea}>
                <Text style={styles.headerTitle}>Bilgilerini Düzenle!</Text>
            </View>

            <View style={styles.contentArea}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>İsim-Soyisim</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Mail Adresiniz</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Şifreniz</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Şifreniz"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color="#CCC" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Şifreyi Onayla</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Şifreyi Onayla"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color="#CCC" />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
                    <Text style={styles.updateButtonText}>Bilgilerini Güncelle</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E91E63',
    },
    headerArea: {
        padding: 30,
        paddingTop: 10,
        paddingBottom: 40,
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    contentArea: {
        flex: 1,
        padding: 30,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    inputGroup: {
        marginBottom: 25,
    },
    label: {
        color: '#C86CDA', // Matching the pinkish purple in the design
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 14,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        paddingBottom: 8,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: '#666',
    },
    updateButton: {
        borderWidth: 1.5,
        borderColor: '#C86CDA',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: 'white',
    },
    updateButtonText: {
        color: '#C86CDA',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
