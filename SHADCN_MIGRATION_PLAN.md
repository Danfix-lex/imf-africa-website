# shadcn/ui Migration Plan

## Component Mapping

| MUI Component | shadcn Component | Status | Notes |
|---------------|------------------|--------|-------|
| Button | Button | ✅ Installed | Variants: default, secondary, destructive, outline, ghost, link |
| Card | Card | ✅ Installed | Includes CardHeader, CardContent, CardFooter |
| Chip | Badge | ✅ Installed | Variants: default, secondary, destructive, outline |
| TextField | Input | ✅ Installed | Standard input field |
| Select | Select | ✅ Installed | Includes SelectTrigger, SelectContent, SelectItem |
| Dialog | Dialog | ✅ Installed | Includes DialogContent, DialogHeader, DialogFooter |
| Tabs | Tabs | ✅ Installed | Includes TabsList, TabsTrigger |
| Modal | Dialog | ✅ Installed | Use Dialog component instead |

## Components to Replace

### 1. Header Component
- Replace MUI AppBar with custom header using shadcn components
- Replace MUI Button with shadcn Button
- Replace MUI IconButton with shadcn Button variant="ghost"
- Replace MUI Avatar with custom avatar component
- Replace MUI Menu with shadcn Dialog for mobile menu

### 2. Footer Component
- Replace MUI Box with standard HTML elements
- Replace MUI Typography with standard HTML elements
- Replace MUI Button with shadcn Button
- Replace MUI IconButton with shadcn Button variant="ghost"

### 3. ProgramsSection Component
- Replace MUI Card with shadcn Card
- Replace MUI Button with shadcn Button
- Replace MUI Chip with shadcn Badge
- Replace MUI Modal with shadcn Dialog
- Replace MUI Tabs with shadcn Tabs

### 4. Gallery Page
- Replace MUI Card with shadcn Card
- Replace MUI Button with shadcn Button
- Replace MUI Chip with shadcn Badge
- Replace MUI Dialog with shadcn Dialog
- Replace MUI Tabs with shadcn Tabs

### 5. Other Components
- AboutSection.tsx
- AnimatedSection.tsx
- CallToActionSection.tsx
- EnhancedCard.tsx
- HeroSection.tsx
- InitiativesSection.tsx
- LeadershipSection.tsx
- NewsSection.tsx
- PaymentIntegration.tsx
- RemittalsSection.tsx
- StatisticsSection.tsx

## Migration Steps

### Phase 1: Foundation Components
1. Create shadcn versions of Header and Footer
2. Test navigation and theme switching
3. Ensure responsive design works correctly

### Phase 2: Core Pages
1. Create shadcn version of Gallery page
2. Create shadcn version of Programs section
3. Test all functionality including API integration

### Phase 3: Remaining Components
1. Convert all remaining components to use shadcn
2. Ensure consistent styling across all pages
3. Remove unused MUI dependencies

## Benefits of Migration

1. **Consistency**: All components will have a unified design language
2. **Performance**: shadcn components are lightweight and optimized
3. **Maintainability**: Easier to maintain with fewer dependencies
4. **Customization**: Tailwind CSS allows for easy customization
5. **Accessibility**: shadcn components are built with accessibility in mind

## Timeline

- Phase 1: 2-3 days
- Phase 2: 3-4 days
- Phase 3: 4-5 days
- Total: 9-12 days

## Testing Plan

1. Visual consistency across all pages
2. Responsive design on all screen sizes
3. Theme switching (light/dark mode)
4. All interactive elements (buttons, forms, etc.)
5. Performance testing
6. Cross-browser compatibility