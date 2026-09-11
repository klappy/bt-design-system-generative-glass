The shared language picker: UI locale, resource filter, project attribute, translation target, gateway pair.

```jsx
<LanguagePicker context="attribute" value={lang} onChange={setLang} suggested={['hi','sw','en']}
  languages={[{code:'hi',autonym:'हिन्दी',english:'Hindi',region:'India',coverage:'aaai',gateway:true,localized:true},
              {code:'ar',autonym:'العربية',english:'Arabic',dir:'rtl',region:'Middle East',coverage:'aaaa',gateway:true,localized:true},
              {code:'km',autonym:'ខ្មែរ',english:'Khmer',region:'Cambodia',coverage:'nnnn'}]}/>
```

Build `languages` as the union of Door43 /languages and Aquifer localizations keyed by code. Never hide a language in attribute/target contexts; a miss says "No resources yet · you can still choose it". AI-translatable is a third state, one rung of a confidence ladder that resource metadata will carry later.
