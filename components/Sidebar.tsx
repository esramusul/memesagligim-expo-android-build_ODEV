import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

const { width } = Dimensions.get('window');

interface SidebarProps {
    visible: boolean;
    onClose: () => void;
}

export default function Sidebar({ visible, onClose }: SidebarProps) {
    const router = useRouter();
    const { email, name, setEmail, setName } = useAuth();

    const handleNavigate = (route: string) => {
        onClose();
        if (route === '/login') {
            // clear data on logout
            setEmail('');
            setName('');
        }

        if (route === 'back') {
            router.back();
        } else {
            router.push(route as any);
        }
    };

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                {/* Click outside to close */}
                <TouchableOpacity style={styles.closeArea} activeOpacity={1} onPress={onClose} />

                {/* Sidebar Content */}
                <SafeAreaView style={styles.sidebar}>
                    {/* Profile Section */}
                    <View style={styles.profileSection}>
                        <View style={styles.avatarPlaceholder}>
                            <Ionicons name="person" size={40} color="#E91E63" />
                        </View>
                        <View>
                            <Text style={styles.profileName}>{name || 'Misafir'}</Text>
                            <Text style={styles.profileEmail}>{email || 'Giriş Yapılmadı'}</Text>
                        </View>
                    </View>

                    <ScrollView style={styles.menuList}>
                        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/')}>
                            <Ionicons name="home-outline" size={24} color="#E91E63" style={styles.menuIcon} />
                            <Text style={styles.menuText}>Anasayfa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/hakkimizda')}>
                            <FontAwesome5 name="ribbon" size={24} color="#C86CDA" style={styles.menuIcon} />
                            <Text style={styles.menuText}>Hakkımızda</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/nasil-hissediyorum')}>
                            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#E91E63" style={styles.menuIcon} />
                            <Text style={styles.menuText}>Bugün Nasıl Hissediyorum?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/egitimler')}>
                            <MaterialIcons name="menu-book" size={24} color="#90CAF9" style={styles.menuIcon} />
                            <Text style={styles.menuText}>Eğitimler</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/gunluk-ipucu')}>
                            <Ionicons name="help-circle-outline" size={24} color="#FFD54F" style={styles.menuIcon} />
                            <Text style={styles.menuText}>Günlük İpucu</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/formlar')}>
                            <FontAwesome5 name="user-md" size={24} color="#A5D6A7" style={styles.menuIcon} />
                            <Text style={styles.menuText}>Formlar ve Ölçekler</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/bilgilerim')}>
                            <Ionicons name="person-circle-outline" size={24} color="#8E24AA" style={styles.menuIcon} />
                            <Text style={styles.menuText}>Bilgilerimi Düzenle</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/kaynakca')}>
                            <MaterialIcons name="library-books" size={24} color="#F44336" style={styles.menuIcon} />
                            <Text style={styles.menuText}>Kaynakça</Text>
                        </TouchableOpacity>

                    </ScrollView>

                    {/* Logout Button */}
                    <TouchableOpacity style={styles.logoutButton} onPress={() => handleNavigate('/login')}>
                        <Ionicons name="log-out-outline" size={24} color="white" />
                        <Text style={styles.logoutText}>Çıkış Yap</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    closeArea: {
        flex: 1,
    },
    sidebar: {
        width: width * 0.75,
        backgroundColor: 'white',
        height: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        marginTop: 20,
    },
    avatarPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FCE4EC',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    menuList: {
        flex: 1,
        paddingVertical: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    menuIcon: {
        width: 30,
        textAlign: 'center',
        marginRight: 15,
    },
    menuText: {
        fontSize: 16,
        color: '#444',
        fontWeight: '500',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E91E63',
        margin: 20,
        paddingVertical: 15,
        borderRadius: 10,
    },
    logoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
