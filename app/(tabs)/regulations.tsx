import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { fishingRegulations, huntingRegulations } from '@/constants/regulations';

export default function RegulationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.sectionTitle}>
        Hunting
      </ThemedText>
      {huntingRegulations.map((rule, index) => (
        <ThemedView key={`hunt-${index}`} style={styles.item}>
          <ThemedText type="subtitle">{rule.title}</ThemedText>
          <ThemedText>{rule.description}</ThemedText>
        </ThemedView>
      ))}

      <ThemedText type="title" style={[styles.sectionTitle, styles.sectionSpacing]}>
        Fishing
      </ThemedText>
      {fishingRegulations.map((rule, index) => (
        <ThemedView key={`fish-${index}`} style={styles.item}>
          <ThemedText type="subtitle">{rule.title}</ThemedText>
          <ThemedText>{rule.description}</ThemedText>
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  sectionSpacing: {
    marginTop: 8,
  },
});
