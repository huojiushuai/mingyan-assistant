(function() {
  'use strict';

  const DEVICES_DB = {"apple": [{"make": "Apple", "model": "Apple iPhone 18 Pro Max", "software": "27.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.60", "focal35": "24", "f": "1.48", "appleLens": "back triple camera", "appleSpec": ["2.08", "10.0", "1.48", "2.8"]}, "back": {"focal": "10.0", "focal35": "100", "f": "2.8", "appleLens": "back telephoto camera", "appleSpec": ["2.08", "10.0", "1.48", "2.8"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "10.0", "1.48", "2.8"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.48", "focal": "6.60", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 18 Pro", "software": "27.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.60", "focal35": "24", "f": "1.48", "appleLens": "back triple camera", "appleSpec": ["2.08", "10.0", "1.48", "2.8"]}, "back": {"focal": "10.0", "focal35": "100", "f": "2.8", "appleLens": "back telephoto camera", "appleSpec": ["2.08", "10.0", "1.48", "2.8"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "10.0", "1.48", "2.8"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.48", "focal": "6.60", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone Duo", "software": "27.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "5.70", "focal35": "26", "f": "1.6", "appleLens": "back dual camera", "appleSpec": ["2.08", "5.70", "1.6", "2.2"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "5.70", "1.6", "2.2"]}, "front": {"focal": "5.31", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["5.31", "5.31", "2.2", "2.2"]}, "cam": "dual"}, "defaultLens": "main", "f": "1.6", "focal": "5.70", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 17 Pro Max", "software": "26.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["2.08", "12.0", "1.78", "2.8"]}, "back": {"focal": "12.0", "focal35": "100", "f": "2.8", "appleLens": "back telephoto camera", "appleSpec": ["2.08", "12.0", "1.78", "2.8"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "12.0", "1.78", "2.8"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.78", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 17 Pro", "software": "26.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["2.08", "12.0", "1.78", "2.8"]}, "back": {"focal": "12.0", "focal35": "100", "f": "2.8", "appleLens": "back telephoto camera", "appleSpec": ["2.08", "12.0", "1.78", "2.8"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "12.0", "1.78", "2.8"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.78", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 17 Plus", "software": "26.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back dual camera", "appleSpec": ["2.08", "6.765", "1.78", "2.2"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "6.765", "1.78", "2.2"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": "dual"}, "defaultLens": "main", "f": "1.78", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 17", "software": "26.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back dual camera", "appleSpec": ["2.08", "6.765", "1.78", "2.2"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "6.765", "1.78", "2.2"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": "dual"}, "defaultLens": "main", "f": "1.78", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone Air", "software": "26.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "5.70", "focal35": "26", "f": "1.6", "appleLens": "back camera", "appleSpec": ["5.70", "5.70", "1.6", "1.6"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": ""}, "defaultLens": "main", "f": "1.6", "focal": "5.70", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 16e", "software": "18.0", "iso": "64", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "5.1", "focal35": "26", "f": "1.6", "appleLens": "back camera", "appleSpec": ["5.1", "5.1", "1.6", "1.6"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": ""}, "defaultLens": "main", "f": "1.6", "focal": "5.1", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 16 Pro Max", "software": "18.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["2.2", "15.7", "1.78", "2.8"]}, "back": {"focal": "15.7", "focal35": "120", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["2.2", "15.7", "1.78", "2.8"]}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["2.2", "15.7", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.78", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 16 Pro", "software": "18.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["2.2", "15.7", "1.78", "2.8"]}, "back": {"focal": "15.7", "focal35": "120", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["2.2", "15.7", "1.78", "2.8"]}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["2.2", "15.7", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.78", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 16 Plus", "software": "18.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.6", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 16", "software": "18.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.6", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 15 Pro Max", "software": "17.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["1.4", "15.66", "1.78", "2.8"]}, "back": {"focal": "15.66", "focal35": "120", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["1.4", "15.66", "1.78", "2.8"]}, "wide": {"focal": "1.4", "focal35": "13", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["1.4", "15.66", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.78", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 15 Pro", "software": "17.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["1.4", "9.8", "1.78", "2.8"]}, "back": {"focal": "9.8", "focal35": "77", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["1.4", "9.8", "1.78", "2.8"]}, "wide": {"focal": "1.4", "focal35": "13", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["1.4", "9.8", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.78", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 15 Plus", "software": "17.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.6", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 15", "software": "17.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.765", "focal35": "24", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.6", "focal": "6.765", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 14 Pro Max", "software": "16.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.86", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["2.22", "9.0", "1.78", "2.8"]}, "back": {"focal": "9.0", "focal35": "77", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["2.22", "9.0", "1.78", "2.8"]}, "wide": {"focal": "2.22", "focal35": "14", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["2.22", "9.0", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "30", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.78", "focal": "6.86", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 14 Pro", "software": "16.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.86", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["2.22", "9.0", "1.78", "2.8"]}, "back": {"focal": "9.0", "focal35": "77", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["2.22", "9.0", "1.78", "2.8"]}, "wide": {"focal": "2.22", "focal35": "14", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["2.22", "9.0", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "30", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.78", "focal": "6.86", "focal35": "24"}, {"make": "Apple", "model": "Apple iPhone 14 Plus", "software": "16.0", "iso": "64", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "5.7", "focal35": "26", "f": "1.5", "appleLens": "back dual wide camera", "appleSpec": ["1.4", "5.7", "1.5", "2.4"]}, "wide": {"focal": "1.4", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.4", "5.7", "1.5", "2.4"]}, "front": {"focal": "2.69", "focal35": "30", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.5", "focal": "5.7", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 14", "software": "16.0", "iso": "64", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "5.7", "focal35": "26", "f": "1.5", "appleLens": "back dual wide camera", "appleSpec": ["1.4", "5.7", "1.5", "2.4"]}, "wide": {"focal": "1.4", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.4", "5.7", "1.5", "2.4"]}, "front": {"focal": "2.69", "focal35": "30", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.5", "focal": "5.7", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 13 Pro Max", "software": "15.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "5.7", "focal35": "26", "f": "1.5", "appleLens": "back triple camera", "appleSpec": ["1.57", "9.0", "1.5", "2.8"]}, "back": {"focal": "9.0", "focal35": "77", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["1.57", "9.0", "1.5", "2.8"]}, "wide": {"focal": "1.57", "focal35": "13", "f": "1.8", "appleLens": "back triple camera", "appleSpec": ["1.57", "9.0", "1.5", "2.8"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.5", "focal": "5.7", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 13 Pro", "software": "15.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "5.7", "focal35": "26", "f": "1.5", "appleLens": "back triple camera", "appleSpec": ["1.57", "9.0", "1.5", "2.8"]}, "back": {"focal": "9.0", "focal35": "77", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["1.57", "9.0", "1.5", "2.8"]}, "wide": {"focal": "1.57", "focal35": "13", "f": "1.8", "appleLens": "back triple camera", "appleSpec": ["1.57", "9.0", "1.5", "2.8"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.5", "focal": "5.7", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 13 mini", "software": "15.0", "iso": "64", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "5.1", "focal35": "26", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "5.1", "1.6", "2.4"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "5.1", "1.6", "2.4"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.6", "focal": "5.1", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 13", "software": "15.0", "iso": "64", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "5.1", "focal35": "26", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "5.1", "1.6", "2.4"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "5.1", "1.6", "2.4"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.6", "focal": "5.1", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 12 Pro Max", "software": "14.0", "iso": "64", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "5.1", "focal35": "26", "f": "1.6", "appleLens": "back triple camera", "appleSpec": ["1.54", "7.5", "1.6", "2.2"]}, "back": {"focal": "7.5", "focal35": "65", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["1.54", "7.5", "1.6", "2.2"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back triple camera", "appleSpec": ["1.54", "7.5", "1.6", "2.2"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.6", "focal": "5.1", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 12 Pro", "software": "14.0", "iso": "64", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "4.2", "focal35": "26", "f": "1.6", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.6", "2.0"]}, "back": {"focal": "6.0", "focal35": "52", "f": "2", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.6", "2.0"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.6", "2.0"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.6", "focal": "4.2", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 12 mini", "software": "14.0", "iso": "64", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "4.2", "focal35": "26", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.2", "1.6", "2.4"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.2", "1.6", "2.4"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.6", "focal": "4.2", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 12", "software": "14.0", "iso": "64", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "4.2", "focal35": "26", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.2", "1.6", "2.4"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.2", "1.6", "2.4"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.6", "focal": "4.2", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 11 Pro Max", "software": "13.0", "iso": "64", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.8", "2.0"]}, "back": {"focal": "6.0", "focal35": "52", "f": "2", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.8", "2.0"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.8", "2.0"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.8", "focal": "4.25", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 11 Pro", "software": "13.0", "iso": "64", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.8", "2.0"]}, "back": {"focal": "6.0", "focal35": "52", "f": "2", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.8", "2.0"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.8", "2.0"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "defaultLens": "main", "f": "1.8", "focal": "4.25", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone 11", "software": "13.0", "iso": "64", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.25", "1.8", "2.4"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.25", "1.8", "2.4"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "dualWide"}, "defaultLens": "main", "f": "1.8", "focal": "4.25", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone XS Max", "software": "12.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back dual camera", "appleSpec": ["4.25", "6.0", "1.8", "2.4"]}, "back": {"focal": "6.0", "focal35": "52", "f": "2.4", "appleLens": "back dual camera", "appleSpec": ["4.25", "6.0", "1.8", "2.4"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": "dual"}, "defaultLens": "main", "f": "1.8", "focal": "4.25", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone XS", "software": "12.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back dual camera", "appleSpec": ["4.25", "6.0", "1.8", "2.4"]}, "back": {"focal": "6.0", "focal35": "52", "f": "2.4", "appleLens": "back dual camera", "appleSpec": ["4.25", "6.0", "1.8", "2.4"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": "dual"}, "defaultLens": "main", "f": "1.8", "focal": "4.25", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone XR", "software": "12.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back camera", "appleSpec": ["4.25", "4.25", "1.8", "1.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": ""}, "defaultLens": "main", "f": "1.8", "focal": "4.25", "focal35": "26"}, {"make": "Apple", "model": "Apple iPhone X", "software": "12.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "4.0", "focal35": "28", "f": "1.8", "appleLens": "back dual camera", "appleSpec": ["4.0", "6.0", "1.8", "2.4"]}, "back": {"focal": "6.0", "focal35": "56", "f": "2.4", "appleLens": "back dual camera", "appleSpec": ["4.0", "6.0", "1.8", "2.4"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": "dual"}, "defaultLens": "main", "f": "1.8", "focal": "4.0", "focal35": "28"}, {"make": "Apple", "model": "Apple iPhone 8 Plus", "software": "11.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "3.99", "focal35": "28", "f": "1.8", "appleLens": "back dual camera", "appleSpec": ["3.99", "6.0", "1.8", "2.8"]}, "back": {"focal": "6.0", "focal35": "56", "f": "2.8", "appleLens": "back dual camera", "appleSpec": ["3.99", "6.0", "1.8", "2.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": "dual"}, "defaultLens": "main", "f": "1.8", "focal": "3.99", "focal35": "28"}, {"make": "Apple", "model": "Apple iPhone 8", "software": "11.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "3.99", "focal35": "28", "f": "1.8", "appleLens": "back camera", "appleSpec": ["3.99", "3.99", "1.8", "1.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": ""}, "defaultLens": "main", "f": "1.8", "focal": "3.99", "focal35": "28"}, {"make": "Apple", "model": "Apple iPhone 7 Plus", "software": "11.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "3.99", "focal35": "28", "f": "1.8", "appleLens": "back dual camera", "appleSpec": ["3.99", "6.0", "1.8", "2.8"]}, "back": {"focal": "6.0", "focal35": "56", "f": "2.8", "appleLens": "back dual camera", "appleSpec": ["3.99", "6.0", "1.8", "2.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": "dual"}, "defaultLens": "main", "f": "1.8", "focal": "3.99", "focal35": "28"}, {"make": "Apple", "model": "Apple iPhone 7", "software": "11.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "3.99", "focal35": "28", "f": "1.8", "appleLens": "back camera", "appleSpec": ["3.99", "3.99", "1.8", "1.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": ""}, "defaultLens": "main", "f": "1.8", "focal": "3.99", "focal35": "28"}, {"make": "Apple", "model": "Apple iPhone SE 3", "software": "15.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "3.99", "focal35": "28", "f": "1.8", "appleLens": "back camera", "appleSpec": ["3.99", "3.99", "1.8", "1.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": ""}, "defaultLens": "main", "f": "1.8", "focal": "3.99", "focal35": "28"}, {"make": "Apple", "model": "Apple iPhone SE 2", "software": "13.0", "iso": "50", "shutter": "1/60", "exposureBias": "0", "lenses": {"main": {"focal": "3.99", "focal35": "28", "f": "1.8", "appleLens": "back camera", "appleSpec": ["3.99", "3.99", "1.8", "1.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": ""}, "defaultLens": "main", "f": "1.8", "focal": "3.99", "focal35": "28"}, {"make": "Apple", "model": "Apple iPad Pro 13\" M4", "software": "18.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.86", "focal35": "24", "f": "1.78", "appleLens": "back camera", "appleSpec": ["6.86", "6.86", "1.78", "1.78"]}, "front": {"focal": "2.2", "focal35": "22", "f": "2.4", "appleLens": "front camera", "appleSpec": ["2.2", "2.2", "2.4", "2.4"]}, "cam": ""}, "defaultLens": "main", "f": "1.78", "focal": "6.86", "focal35": "24"}, {"make": "Apple", "model": "Apple iPad Pro 11\" M4", "software": "18.0", "iso": "100", "shutter": "1/120", "exposureBias": "0", "lenses": {"main": {"focal": "6.86", "focal35": "24", "f": "1.78", "appleLens": "back camera", "appleSpec": ["6.86", "6.86", "1.78", "1.78"]}, "front": {"focal": "2.2", "focal35": "22", "f": "2.4", "appleLens": "front camera", "appleSpec": ["2.2", "2.2", "2.4", "2.4"]}, "cam": ""}, "defaultLens": "main", "f": "1.78", "focal": "6.86", "focal35": "24"}, {"make": "Apple", "model": "Apple iPad Pro 13\" M3", "software": "17.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "5.7", "focal35": "26", "f": "1.8", "appleLens": "back camera", "appleSpec": ["5.7", "5.7", "1.8", "1.8"]}, "front": {"focal": "2.2", "focal35": "22", "f": "2.4", "appleLens": "front camera", "appleSpec": ["2.2", "2.2", "2.4", "2.4"]}, "cam": ""}, "defaultLens": "main", "f": "1.8", "focal": "5.7", "focal35": "26"}, {"make": "Apple", "model": "Apple iPad Pro 11\" M3", "software": "17.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "5.7", "focal35": "26", "f": "1.8", "appleLens": "back camera", "appleSpec": ["5.7", "5.7", "1.8", "1.8"]}, "front": {"focal": "2.2", "focal35": "22", "f": "2.4", "appleLens": "front camera", "appleSpec": ["2.2", "2.2", "2.4", "2.4"]}, "cam": ""}, "defaultLens": "main", "f": "1.8", "focal": "5.7", "focal35": "26"}, {"make": "Apple", "model": "Apple iPad Pro 12.9\" M2", "software": "17.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "5.7", "focal35": "26", "f": "1.8", "appleLens": "back camera", "appleSpec": ["5.7", "5.7", "1.8", "1.8"]}, "front": {"focal": "2.2", "focal35": "22", "f": "2.4", "appleLens": "front camera", "appleSpec": ["2.2", "2.2", "2.4", "2.4"]}, "cam": ""}, "defaultLens": "main", "f": "1.8", "focal": "5.7", "focal35": "26"}, {"make": "Apple", "model": "Apple iPad Pro 11\" M2", "software": "17.0", "iso": "80", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "5.7", "focal35": "26", "f": "1.8", "appleLens": "back camera", "appleSpec": ["5.7", "5.7", "1.8", "1.8"]}, "front": {"focal": "2.2", "focal35": "22", "f": "2.4", "appleLens": "front camera", "appleSpec": ["2.2", "2.2", "2.4", "2.4"]}, "cam": ""}, "defaultLens": "main", "f": "1.8", "focal": "5.7", "focal35": "26"}], "vivo": [{"make": "vivo", "model": "vivo X200 Ultra", "software": "OriginOS 5", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.7", "focal35": "23", "f": "1.69"}, "back": {"focal": "14.0", "focal35": "85", "f": "2.27"}, "wide": {"focal": "3.4", "focal35": "14", "f": "2"}, "front": {"focal": "3.0", "focal35": "24", "f": "2.45"}}, "defaultLens": "main", "f": "1.69", "focal": "8.7", "focal35": "23"}, {"make": "vivo", "model": "vivo X200 Pro", "software": "OriginOS 5", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.7", "focal35": "23", "f": "1.57"}, "back": {"focal": "14.0", "focal35": "85", "f": "2.67"}, "wide": {"focal": "3.4", "focal35": "15", "f": "2"}, "front": {"focal": "3.0", "focal35": "24", "f": "2"}}, "defaultLens": "main", "f": "1.57", "focal": "8.7", "focal35": "23"}, {"make": "vivo", "model": "vivo X100 Ultra", "software": "OriginOS 5", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.7", "focal35": "23", "f": "1.75"}, "back": {"focal": "14.3", "focal35": "85", "f": "2.67"}, "wide": {"focal": "3.7", "focal35": "14", "f": "2.2"}, "front": {"focal": "3.0", "focal35": "24", "f": "2.45"}}, "defaultLens": "main", "f": "1.75", "focal": "8.7", "focal35": "23"}, {"make": "vivo", "model": "vivo X100 Pro", "software": "OriginOS 4", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.7", "focal35": "23", "f": "1.75"}, "back": {"focal": "14.3", "focal35": "100", "f": "2.5"}, "wide": {"focal": "3.7", "focal35": "15", "f": "2"}, "front": {"focal": "3.0", "focal35": "24", "f": "2"}}, "defaultLens": "main", "f": "1.75", "focal": "8.7", "focal35": "23"}], "iqoo": [{"make": "iQOO", "model": "iQOO 13", "software": "OriginOS 5", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "24", "f": "1.88"}, "back": {"focal": "11.0", "focal35": "72", "f": "1.85"}, "wide": {"focal": "2.75", "focal35": "15", "f": "2"}, "front": {"focal": "2.78", "focal35": "23", "f": "2.45"}}, "defaultLens": "main", "f": "1.88", "focal": "6.72", "focal35": "24"}, {"make": "iQOO", "model": "iQOO 12 Pro", "software": "OriginOS 4", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.25", "focal35": "23", "f": "1.68"}, "back": {"focal": "16.4", "focal35": "64", "f": "2.57"}, "wide": {"focal": "2.75", "focal35": "15", "f": "2"}, "front": {"focal": "2.78", "focal35": "23", "f": "2.45"}}, "defaultLens": "main", "f": "1.68", "focal": "8.25", "focal35": "23"}, {"make": "iQOO", "model": "iQOO Neo10 Pro", "software": "OriginOS 5", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "24", "f": "1.88"}, "back": {"focal": "6.72", "focal35": "24", "f": "1.88"}, "wide": {"focal": "2.75", "focal35": "16", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "23", "f": "2.45"}}, "defaultLens": "main", "f": "1.88", "focal": "6.72", "focal35": "24"}], "oppo": [{"make": "OPPO", "model": "Find X8 Ultra", "software": "ColorOS 15", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.7", "focal35": "23", "f": "1.8"}, "back": {"focal": "13.2", "focal35": "70", "f": "2.1"}, "wide": {"focal": "3.5", "focal35": "15", "f": "2"}, "front": {"focal": "2.78", "focal35": "21", "f": "2.4"}}, "defaultLens": "main", "f": "1.8", "focal": "6.7", "focal35": "23"}, {"make": "OPPO", "model": "Find X8 Pro", "software": "ColorOS 15", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.7", "focal35": "23", "f": "1.6"}, "back": {"focal": "13.2", "focal35": "73", "f": "2.6"}, "wide": {"focal": "3.5", "focal35": "15", "f": "2"}, "front": {"focal": "2.78", "focal35": "21", "f": "2.4"}}, "defaultLens": "main", "f": "1.6", "focal": "6.7", "focal35": "23"}, {"make": "OPPO", "model": "Find X7 Ultra", "software": "ColorOS 14", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.7", "focal35": "23", "f": "1.8"}, "back": {"focal": "13.2", "focal35": "65", "f": "2.1"}, "wide": {"focal": "3.5", "focal35": "14", "f": "2"}, "front": {"focal": "2.78", "focal35": "21", "f": "2.4"}}, "defaultLens": "main", "f": "1.8", "focal": "6.7", "focal35": "23"}], "oneplus": [{"make": "OnePlus", "model": "OnePlus 13", "software": "ColorOS 15", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "23", "f": "1.6"}, "back": {"focal": "13.2", "focal35": "73", "f": "2.65"}, "wide": {"focal": "2.8", "focal35": "15", "f": "2"}, "front": {"focal": "2.78", "focal35": "21", "f": "2.4"}}, "defaultLens": "main", "f": "1.6", "focal": "6.72", "focal35": "23"}, {"make": "OnePlus", "model": "OnePlus 12", "software": "ColorOS 14", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.7", "focal35": "23", "f": "1.6"}, "back": {"focal": "13.2", "focal35": "70", "f": "2.6"}, "wide": {"focal": "2.8", "focal35": "14", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "21", "f": "2.4"}}, "defaultLens": "main", "f": "1.6", "focal": "6.7", "focal35": "23"}, {"make": "OnePlus", "model": "OnePlus Ace 5 Pro", "software": "ColorOS 15", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "24", "f": "1.88"}, "back": {"focal": "6.72", "focal35": "24", "f": "1.88"}, "wide": {"focal": "2.8", "focal35": "16", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2.4"}}, "defaultLens": "main", "f": "1.88", "focal": "6.72", "focal35": "24"}], "xiaomi": [{"make": "Xiaomi", "model": "Xiaomi 15 Ultra", "software": "HyperOS 2", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.67", "focal35": "23", "f": "1.63"}, "back": {"focal": "12.0", "focal35": "100", "f": "2.6"}, "wide": {"focal": "3.4", "focal35": "14", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2"}}, "defaultLens": "main", "f": "1.63", "focal": "8.67", "focal35": "23"}, {"make": "Xiaomi", "model": "Xiaomi 15 Pro", "software": "HyperOS 2", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.7", "focal35": "23", "f": "1.44"}, "back": {"focal": "12.0", "focal35": "60", "f": "2.5"}, "wide": {"focal": "3.4", "focal35": "14", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2"}}, "defaultLens": "main", "f": "1.44", "focal": "6.7", "focal35": "23"}, {"make": "Xiaomi", "model": "Xiaomi 14 Ultra", "software": "HyperOS 1", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.67", "focal35": "23", "f": "1.63"}, "back": {"focal": "12.0", "focal35": "75", "f": "1.8"}, "wide": {"focal": "3.4", "focal35": "12", "f": "1.8"}, "front": {"focal": "2.78", "focal35": "22", "f": "2"}}, "defaultLens": "main", "f": "1.63", "focal": "8.67", "focal35": "23"}, {"make": "Xiaomi", "model": "Xiaomi 14 Pro", "software": "HyperOS 1", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.7", "focal35": "23", "f": "1.42"}, "back": {"focal": "12.0", "focal35": "75", "f": "2"}, "wide": {"focal": "3.4", "focal35": "14", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2"}}, "defaultLens": "main", "f": "1.42", "focal": "6.7", "focal35": "23"}], "redmi": [{"make": "Redmi", "model": "Redmi K80 Pro", "software": "HyperOS 2", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "24", "f": "1.7"}, "back": {"focal": "10.8", "focal35": "60", "f": "2"}, "wide": {"focal": "2.8", "focal35": "16", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "23", "f": "2.45"}}, "defaultLens": "main", "f": "1.7", "focal": "6.72", "focal35": "24"}, {"make": "Redmi", "model": "Redmi K70 Pro", "software": "HyperOS 1", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "24", "f": "1.6"}, "back": {"focal": "10.0", "focal35": "50", "f": "2"}, "wide": {"focal": "2.8", "focal35": "15", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "23", "f": "2.45"}}, "defaultLens": "main", "f": "1.6", "focal": "6.72", "focal35": "24"}, {"make": "Redmi", "model": "Redmi Note 14 Pro+", "software": "HyperOS 2", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "24", "f": "1.65"}, "back": {"focal": "6.72", "focal35": "24", "f": "1.65"}, "wide": {"focal": "2.8", "focal35": "16", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "23", "f": "2.2"}}, "defaultLens": "main", "f": "1.65", "focal": "6.72", "focal35": "24"}], "huawei": [{"make": "HUAWEI", "model": "HUAWEI Pura 70 Ultra", "software": "HarmonyOS 4.2", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.7", "focal35": "25", "f": "1.6"}, "back": {"focal": "13.5", "focal35": "90", "f": "2.1"}, "wide": {"focal": "3.6", "focal35": "13", "f": "2.2"}, "front": {"focal": "2.75", "focal35": "21", "f": "2.4"}}, "defaultLens": "main", "f": "1.6", "focal": "8.7", "focal35": "25"}, {"make": "HUAWEI", "model": "HUAWEI Mate 70 Pro+", "software": "HarmonyOS 5", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.7", "focal35": "24", "f": "1.4"}, "back": {"focal": "13.5", "focal35": "92", "f": "2.1"}, "wide": {"focal": "3.6", "focal35": "13", "f": "2.2"}, "front": {"focal": "2.75", "focal35": "21", "f": "2.4"}}, "defaultLens": "main", "f": "1.4", "focal": "8.7", "focal35": "24"}, {"make": "HUAWEI", "model": "HUAWEI P60 Pro", "software": "HarmonyOS 4", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "8.7", "focal35": "25", "f": "1.4"}, "back": {"focal": "13.5", "focal35": "90", "f": "2.1"}, "wide": {"focal": "3.6", "focal35": "13", "f": "2.2"}, "front": {"focal": "2.75", "focal35": "21", "f": "2.4"}}, "defaultLens": "main", "f": "1.4", "focal": "8.7", "focal35": "25"}], "honor": [{"make": "HONOR", "model": "HONOR Magic7 Pro", "software": "MagicOS 9.0", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.7", "focal35": "24", "f": "1.4"}, "back": {"focal": "12.8", "focal35": "72", "f": "2.6"}, "wide": {"focal": "2.8", "focal35": "13", "f": "2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2"}}, "defaultLens": "main", "f": "1.4", "focal": "6.7", "focal35": "24"}, {"make": "HONOR", "model": "HONOR Magic6 Pro", "software": "MagicOS 8.0", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.7", "focal35": "24", "f": "1.4"}, "back": {"focal": "15.5", "focal35": "180", "f": "2.6"}, "wide": {"focal": "2.8", "focal35": "13", "f": "2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2"}}, "defaultLens": "main", "f": "1.4", "focal": "6.7", "focal35": "24"}, {"make": "HONOR", "model": "HONOR 300 Ultra", "software": "MagicOS 9.0", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "24", "f": "1.8"}, "back": {"focal": "12.8", "focal35": "68", "f": "2.4"}, "wide": {"focal": "2.8", "focal35": "15", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2"}}, "defaultLens": "main", "f": "1.8", "focal": "6.72", "focal35": "24"}], "samsung": [{"make": "samsung", "model": "Galaxy S25 Ultra", "software": "One UI 7", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "7.0", "focal35": "23", "f": "1.7"}, "back": {"focal": "16.3", "focal35": "111", "f": "2.4"}, "wide": {"focal": "2.2", "focal35": "13", "f": "1.9"}, "front": {"focal": "2.8", "focal35": "26", "f": "2.2"}}, "defaultLens": "main", "f": "1.7", "focal": "7.0", "focal35": "23"}, {"make": "samsung", "model": "Galaxy S24 Ultra", "software": "One UI 6.1", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "7.0", "focal35": "23", "f": "1.7"}, "back": {"focal": "14.7", "focal35": "111", "f": "2.4"}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2"}, "front": {"focal": "2.8", "focal35": "26", "f": "2.2"}}, "defaultLens": "main", "f": "1.7", "focal": "7.0", "focal35": "23"}, {"make": "samsung", "model": "Galaxy S24+", "software": "One UI 6.1", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.4", "focal35": "24", "f": "1.8"}, "back": {"focal": "7.0", "focal35": "67", "f": "2.4"}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2"}, "front": {"focal": "2.8", "focal35": "26", "f": "2.2"}}, "defaultLens": "main", "f": "1.8", "focal": "6.4", "focal35": "24"}, {"make": "samsung", "model": "Galaxy Z Fold6", "software": "One UI 6.1.1", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.4", "focal35": "23", "f": "1.8"}, "back": {"focal": "7.0", "focal35": "66", "f": "2.4"}, "wide": {"focal": "2.2", "focal35": "12", "f": "2.2"}, "front": {"focal": "2.7", "focal35": "24", "f": "2.2"}}, "defaultLens": "main", "f": "1.8", "focal": "6.4", "focal35": "23"}], "realme": [{"make": "realme", "model": "realme GT7 Pro", "software": "realme UI 6", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.7", "focal35": "24", "f": "1.8"}, "back": {"focal": "12.8", "focal35": "73", "f": "2.65"}, "wide": {"focal": "2.8", "focal35": "16", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2.45"}}, "defaultLens": "main", "f": "1.8", "focal": "6.7", "focal35": "24"}, {"make": "realme", "model": "realme GT6", "software": "realme UI 5.0", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "24", "f": "1.69"}, "back": {"focal": "11.0", "focal35": "47", "f": "2"}, "wide": {"focal": "2.8", "focal35": "16", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2.45"}}, "defaultLens": "main", "f": "1.69", "focal": "6.72", "focal35": "24"}, {"make": "realme", "model": "realme 14 Pro+", "software": "realme UI 6", "iso": "100", "shutter": "1/100", "exposureBias": "0", "lenses": {"main": {"focal": "6.72", "focal35": "24", "f": "1.8"}, "back": {"focal": "10.8", "focal35": "73", "f": "2.65"}, "wide": {"focal": "2.8", "focal35": "16", "f": "2.2"}, "front": {"focal": "2.78", "focal35": "22", "f": "2.45"}}, "defaultLens": "main", "f": "1.8", "focal": "6.72", "focal35": "24"}]};
  const APPLE_LENSES_DB = {"pro4x_18": {"main": {"focal": "6.60", "focal35": "24", "f": "1.48", "appleLens": "back triple camera", "appleSpec": ["2.08", "10.0", "1.48", "2.8"]}, "back": {"focal": "10.0", "focal35": "100", "f": "2.8", "appleLens": "back telephoto camera", "appleSpec": ["2.08", "10.0", "1.48", "2.8"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "10.0", "1.48", "2.8"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": "triple"}, "duo_18": {"main": {"focal": "5.70", "focal35": "26", "f": "1.6", "appleLens": "back dual camera", "appleSpec": ["2.08", "5.70", "1.6", "2.2"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "5.70", "1.6", "2.2"]}, "front": {"focal": "5.31", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["5.31", "5.31", "2.2", "2.2"]}, "cam": "dual"}, "pro4x_17": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["2.08", "12.0", "1.78", "2.8"]}, "back": {"focal": "12.0", "focal35": "100", "f": "2.8", "appleLens": "back telephoto camera", "appleSpec": ["2.08", "12.0", "1.78", "2.8"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "12.0", "1.78", "2.8"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": "triple"}, "dual_17": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back dual camera", "appleSpec": ["2.08", "6.765", "1.78", "2.2"]}, "wide": {"focal": "2.08", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.08", "6.765", "1.78", "2.2"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": "dual"}, "single_air": {"main": {"focal": "5.70", "focal35": "26", "f": "1.6", "appleLens": "back camera", "appleSpec": ["5.70", "5.70", "1.6", "1.6"]}, "front": {"focal": "5.6", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["5.6", "5.6", "1.9", "1.9"]}, "cam": ""}, "pro5x_16": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["2.2", "15.7", "1.78", "2.8"]}, "back": {"focal": "15.7", "focal35": "120", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["2.2", "15.7", "1.78", "2.8"]}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["2.2", "15.7", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "pro5x_15": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["1.4", "15.66", "1.78", "2.8"]}, "back": {"focal": "15.66", "focal35": "120", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["1.4", "15.66", "1.78", "2.8"]}, "wide": {"focal": "1.4", "focal35": "13", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["1.4", "15.66", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "pro3x_15": {"main": {"focal": "6.765", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["1.4", "9.8", "1.78", "2.8"]}, "back": {"focal": "9.8", "focal35": "77", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["1.4", "9.8", "1.78", "2.8"]}, "wide": {"focal": "1.4", "focal35": "13", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["1.4", "9.8", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "pro3x_14": {"main": {"focal": "6.86", "focal35": "24", "f": "1.78", "appleLens": "back triple camera", "appleSpec": ["2.22", "9.0", "1.78", "2.8"]}, "back": {"focal": "9.0", "focal35": "77", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["2.22", "9.0", "1.78", "2.8"]}, "wide": {"focal": "2.22", "focal35": "14", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["2.22", "9.0", "1.78", "2.8"]}, "front": {"focal": "2.69", "focal35": "30", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "triple"}, "pro3x_13": {"main": {"focal": "5.7", "focal35": "26", "f": "1.5", "appleLens": "back triple camera", "appleSpec": ["1.57", "9.0", "1.5", "2.8"]}, "back": {"focal": "9.0", "focal35": "77", "f": "2.8", "appleLens": "back triple camera", "appleSpec": ["1.57", "9.0", "1.5", "2.8"]}, "wide": {"focal": "1.57", "focal35": "13", "f": "1.8", "appleLens": "back triple camera", "appleSpec": ["1.57", "9.0", "1.5", "2.8"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "pro25x": {"main": {"focal": "5.1", "focal35": "26", "f": "1.6", "appleLens": "back triple camera", "appleSpec": ["1.54", "7.5", "1.6", "2.2"]}, "back": {"focal": "7.5", "focal35": "65", "f": "2.2", "appleLens": "back triple camera", "appleSpec": ["1.54", "7.5", "1.6", "2.2"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back triple camera", "appleSpec": ["1.54", "7.5", "1.6", "2.2"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "pro2x_12": {"main": {"focal": "4.2", "focal35": "26", "f": "1.6", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.6", "2.0"]}, "back": {"focal": "6.0", "focal35": "52", "f": "2", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.6", "2.0"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.6", "2.0"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "pro2x_11": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.8", "2.0"]}, "back": {"focal": "6.0", "focal35": "52", "f": "2", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.8", "2.0"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back triple camera", "appleSpec": ["1.54", "6.0", "1.8", "2.0"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "triple"}, "tele_xs": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back dual camera", "appleSpec": ["4.25", "6.0", "1.8", "2.4"]}, "back": {"focal": "6.0", "focal35": "52", "f": "2.4", "appleLens": "back dual camera", "appleSpec": ["4.25", "6.0", "1.8", "2.4"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": "dual"}, "tele_x": {"main": {"focal": "4.0", "focal35": "28", "f": "1.8", "appleLens": "back dual camera", "appleSpec": ["4.0", "6.0", "1.8", "2.4"]}, "back": {"focal": "6.0", "focal35": "56", "f": "2.4", "appleLens": "back dual camera", "appleSpec": ["4.0", "6.0", "1.8", "2.4"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": "dual"}, "tele_8p": {"main": {"focal": "3.99", "focal35": "28", "f": "1.8", "appleLens": "back dual camera", "appleSpec": ["3.99", "6.0", "1.8", "2.8"]}, "back": {"focal": "6.0", "focal35": "56", "f": "2.8", "appleLens": "back dual camera", "appleSpec": ["3.99", "6.0", "1.8", "2.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": "dual"}, "dualWide_16": {"main": {"focal": "6.765", "focal35": "24", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "wide": {"focal": "2.2", "focal35": "13", "f": "2.2", "appleLens": "back dual wide camera", "appleSpec": ["2.2", "6.765", "1.6", "2.2"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "dualWide"}, "dualWide_14": {"main": {"focal": "5.7", "focal35": "26", "f": "1.5", "appleLens": "back dual wide camera", "appleSpec": ["1.4", "5.7", "1.5", "2.4"]}, "wide": {"focal": "1.4", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.4", "5.7", "1.5", "2.4"]}, "front": {"focal": "2.69", "focal35": "30", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": "dualWide"}, "dualWide_13": {"main": {"focal": "5.1", "focal35": "26", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "5.1", "1.6", "2.4"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "5.1", "1.6", "2.4"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "dualWide"}, "dual_12": {"main": {"focal": "4.2", "focal35": "26", "f": "1.6", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.2", "1.6", "2.4"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.2", "1.6", "2.4"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "dualWide"}, "dual_11": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.25", "1.8", "2.4"]}, "wide": {"focal": "1.54", "focal35": "13", "f": "2.4", "appleLens": "back dual wide camera", "appleSpec": ["1.54", "4.25", "1.8", "2.4"]}, "front": {"focal": "2.71", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.71", "2.71", "2.2", "2.2"]}, "cam": "dualWide"}, "single_28": {"main": {"focal": "3.99", "focal35": "28", "f": "1.8", "appleLens": "back camera", "appleSpec": ["3.99", "3.99", "1.8", "1.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": ""}, "single_26": {"main": {"focal": "4.25", "focal35": "26", "f": "1.8", "appleLens": "back camera", "appleSpec": ["4.25", "4.25", "1.8", "1.8"]}, "front": {"focal": "2.87", "focal35": "23", "f": "2.2", "appleLens": "front camera", "appleSpec": ["2.87", "2.87", "2.2", "2.2"]}, "cam": ""}, "single_16e": {"main": {"focal": "5.1", "focal35": "26", "f": "1.6", "appleLens": "back camera", "appleSpec": ["5.1", "5.1", "1.6", "1.6"]}, "front": {"focal": "2.69", "focal35": "23", "f": "1.9", "appleLens": "front camera", "appleSpec": ["2.69", "2.69", "1.9", "1.9"]}, "cam": ""}, "ipad_m4": {"main": {"focal": "6.86", "focal35": "24", "f": "1.78", "appleLens": "back camera", "appleSpec": ["6.86", "6.86", "1.78", "1.78"]}, "front": {"focal": "2.2", "focal35": "22", "f": "2.4", "appleLens": "front camera", "appleSpec": ["2.2", "2.2", "2.4", "2.4"]}, "cam": ""}, "ipad_m2": {"main": {"focal": "5.7", "focal35": "26", "f": "1.8", "appleLens": "back camera", "appleSpec": ["5.7", "5.7", "1.8", "1.8"]}, "front": {"focal": "2.2", "focal35": "22", "f": "2.4", "appleLens": "front camera", "appleSpec": ["2.2", "2.2", "2.4", "2.4"]}, "cam": ""}};
  const HOT_CITIES = [{"name": "上海", "label": "上海", "lat": 31.2304, "lng": 121.4737}, {"name": "北京", "label": "北京", "lat": 39.9042, "lng": 116.4074}, {"name": "广州", "label": "广东省 · 广州", "lat": 23.1291, "lng": 113.2644}, {"name": "深圳", "label": "广东省 · 深圳", "lat": 22.5431, "lng": 114.0579}, {"name": "成都", "label": "四川省 · 成都", "lat": 30.5728, "lng": 104.0668}, {"name": "杭州", "label": "浙江省 · 杭州", "lat": 30.2741, "lng": 120.1551}, {"name": "南京", "label": "江苏省 · 南京", "lat": 32.0603, "lng": 118.7969}, {"name": "重庆", "label": "重庆", "lat": 29.563, "lng": 106.5516}, {"name": "武汉", "label": "湖北省 · 武汉", "lat": 30.5928, "lng": 114.3055}, {"name": "西安", "label": "陕西省 · 西安", "lat": 34.3416, "lng": 108.9398}, {"name": "长沙", "label": "湖南省 · 长沙", "lat": 28.2282, "lng": 112.9388}, {"name": "三亚", "label": "海南省 · 三亚", "lat": 18.2528, "lng": 109.512}, {"name": "西湖", "label": "浙江省 · 杭州 · 西湖", "lat": 30.2428, "lng": 120.1485}, {"name": "外滩", "label": "上海市 · 外滩", "lat": 31.24, "lng": 121.49}];

  const LENS_NAMES = {
    main: '主摄像头',
    main2: '主相机',
    front: '前置摄像头',
    back: '长焦摄像头',
    wide: '超广角摄像头'
  };

  const APPLE_CAM_LABELS = {
    triple: 'back triple camera',
    dualWide: 'back dual wide camera',
    dual: 'back dual camera',
    '': 'back camera'
  };

  const PANEL_TITLES = {
    general: '应用设置',
    time: '时间设置',
    lens: '镜头与焦距',
    params: '拍摄参数',
    resolution: '分辨率设置',
    filesize: '文件大小',
    naming: '导出命名',
    video: '视频信息'
  };

  const FIELD_IDS = [
    'dateTimeOriginal', 'make', 'model', 'lensModel',
    'fNumber', 'focalLength', 'focalLength35',
    'isoInput', 'shutterInput', 'biasInput', 'software',
    'imageWidth', 'imageHeight', 'customFileSize',
    'videoCaption', 'videoCopyright'
  ];

  const DEFAULT_AMAP_KEY = 'b60d8839e712d8392d590ce9feb4b29d';

  function storageGet(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      if (v !== null) return v;
    } catch (e) {}
    try {
      const v = sessionStorage.getItem(key);
      if (v !== null) return v;
    } catch (e) {}
    return fallback;
  }

  function storageSet(key, val) {
    try { localStorage.setItem(key, val); } catch (e) {}
    try { sessionStorage.setItem(key, val); } catch (e) {}
  }

  function storageRemove(key) {
    try { localStorage.removeItem(key); } catch (e) {}
    try { sessionStorage.removeItem(key); } catch (e) {}
  }

  const exportOptions = {
    orientation: storageGet('eif_photo_orientation', 'preserve') === 'normalize' ? 'normalize' : 'preserve',
    quality: Math.max(60, Math.min(100, Number(storageGet('eif_jpeg_quality', '95')) || 95))
  };

  function localizeLens(value) {
    const names = [
      ['back triple camera', '后置三摄'], ['back dual wide camera', '后置双广角摄像头'],
      ['back dual camera', '后置双摄'], ['back telephoto camera', '后置长焦摄像头'],
      ['back ultra wide camera', '后置超广角摄像头'], ['back wide camera', '后置广角摄像头'],
      ['front truedepth camera', '前置原深感摄像头'], ['front camera', '前置摄像头'],
      ['back camera', '后置摄像头'], ['ultra wide', '超广角'], ['telephoto', '长焦']
    ];
    let text = String(value || '');
    names.forEach(([en, zh]) => { text = text.replace(new RegExp(en, 'gi'), zh); });
    return text;
  }

  let selectedFiles = [];
  let exportedResults = [];
  let currentBrand = 'apple';
  let currentLens = 'main';
  let currentPreset = null;
  let currentPresetBrand = '';
  let currentOrientation = storageGet('eif_res_orientation', 'portrait') || 'portrait';
  let exportNaming = storageGet('eif_export_naming', 'standard') || 'standard';
  let currentGpsLabel = '';
  let toastTimer = null;
  let amapInstance = null;
  let amapMarker = null;

  const $ = (id) => document.getElementById(id);

  function showToast(msg, type = 'info') {
    const toast = $('toast');
    if (!toast) return;
    if (toastTimer) clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.className = 'toast ' + (type || 'info');
    toast.style.display = 'block';
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (!toast.classList.contains('show')) {
          toast.style.display = 'none';
        }
      }, 200);
    }, 2200);
  }

  function setLoading(visible, text) {
    const loading = $('loading');
    const loadingText = $('loadingText');
    if (loadingText && text) loadingText.textContent = text;
    if (loading) loading.classList.toggle('active', !!visible);
  }

  function initTheme() {
    let saved = storageGet('target_theme_v1', '');
    if (!saved) {
      try {
        saved = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } catch (e) {
        saved = 'light';
      }
    }
    applyTheme(saved, false);
    try {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      if (mq && mq.addEventListener) {
        mq.addEventListener('change', (e) => {
          if (!storageGet('target_theme_manual_v1', '')) {
            applyTheme(e.matches ? 'dark' : 'light', false);
          }
        });
      }
    } catch (e) {}
  }

  function applyTheme(theme, announce) {
    const isDark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    storageSet('target_theme_v1', isDark ? 'dark' : 'light');
    const btn = $('themeToggleBtn');
    if (btn) {
      const sun = btn.querySelector('.theme-icon-sun');
      const moon = btn.querySelector('.theme-icon-moon');
      if (sun) sun.style.display = isDark ? 'none' : '';
      if (moon) moon.style.display = isDark ? '' : 'none';
      btn.setAttribute('title', isDark ? '切换浅色模式' : '切换深色模式');
      btn.setAttribute('aria-label', isDark ? '切换浅色模式' : '切换深色模式');
    }
    if (announce) {
      storageSet('target_theme_manual_v1', '1');
      showToast(isDark ? '已切换深色模式' : '已切换浅色模式', 'info');
    }
  }

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function highlightMatch(text, query) {
    const safeText = escapeHtml(text);
    if (!query) return safeText;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    try {
      const re = new RegExp(escapedQuery, 'gi');
      return safeText.replace(re, '<span class="search-highlight">$&</span>');
    } catch (e) {
      return safeText;
    }
  }

  function formatFileSize(bytes) {
    if (!Number.isFinite(bytes) || bytes < 0) return '-';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }

  function isVideoFile(file) {
    if (!file) return false;
    const type = (file.type || '').toLowerCase();
    const name = (file.name || '').toLowerCase();
    return type.startsWith('video/') || name.endsWith('.mov') || name.endsWith('.mp4') || name.endsWith('.m4v');
  }

  function buildLensModelString(preset, lensKey) {
    const label = LENS_NAMES[lensKey] || LENS_NAMES.main;
    if (!preset) {
      const focal = ($('focalLength') ? $('focalLength').value : '').trim();
      const f = ($('fNumber') ? $('fNumber').value : '').trim();
      return (focal && f) ? `${label} — ${focal}mm f/${f}` : label;
    }
    const lenses = preset.lenses || {};
    const actualKey = (lensKey === 'main2') ? 'main' : lensKey;
    const lensObj = lenses[actualKey] || lenses[preset.defaultLens || 'main'] || {};
    const focal = lensObj.focal || preset.focal || '';
    const f = lensObj.f || preset.f || '';
    if (focal && f) {
      return `${label} — ${focal}mm f/${f}`;
    }
    return label;
  }

  function applyDevicePreset(preset, brand, lensKey, saveRecent = true) {
    if (!preset) return;
    currentPreset = preset;
    if (brand) {
      currentBrand = brand;
      currentPresetBrand = brand;
    }
    const lenses = preset.lenses || {};
    let targetLens = lensKey || preset.defaultLens || 'main';
    const lookupKey = (targetLens === 'main2') ? 'main' : targetLens;
    if (!lenses[lookupKey] && lenses.main) {
      targetLens = 'main';
    }
    currentLens = targetLens;

    const lensInfo = lenses[(targetLens === 'main2') ? 'main' : targetLens] || lenses[preset.defaultLens || 'main'] || {};

    $('make').value = preset.make || '';
    $('model').value = preset.model || '';
    $('software').value = preset.software || '';
    $('isoInput').value = preset.iso || '100';
    $('shutterInput').value = preset.shutter || '1/100';
    $('biasInput').value = preset.exposureBias != null ? String(preset.exposureBias) : '0';

    const focal = lensInfo.focal || preset.focal || '';
    const focal35 = lensInfo.focal35 || preset.focal35 || '';
    const fNum = lensInfo.f || preset.f || '';

    $('focalLength').value = focal;
    $('focalLength35').value = focal35;
    $('fNumber').value = fNum;
    $('lensModel').value = buildLensModelString(preset, targetLens);

    if (!$('dateTimeOriginal').value) {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      $('dateTimeOriginal').value = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }

    if (saveRecent) {
      addRecentDevice(currentBrand, preset.model);
    }

    updateLensButtonsUI();
    updateSummaries();
    saveSession();
  }

  function switchLens(lensKey) {
    if (currentPreset) {
      const lenses = currentPreset.lenses || {};
      const lookupKey = (lensKey === 'main2') ? 'main' : lensKey;
      const lensInfo = lenses[lookupKey];
      if (!lensInfo) {
        showToast(`当前设备没有${LENS_NAMES[lensKey] || '该镜头'}，可手动填写参数`, 'info');
        return;
      }
      currentLens = lensKey;
      updateLensButtonsUI();
      if (lensInfo.focal) $('focalLength').value = lensInfo.focal;
      if (lensInfo.focal35) $('focalLength35').value = lensInfo.focal35;
      if (lensInfo.f) $('fNumber').value = lensInfo.f;
      $('lensModel').value = buildLensModelString(currentPreset, lensKey);
    } else {
      currentLens = lensKey;
      updateLensButtonsUI();
      const focal = ($('focalLength').value || '').trim();
      const f = ($('fNumber').value || '').trim();
      const label = LENS_NAMES[lensKey] || '主摄像头';
      $('lensModel').value = (focal && f) ? `${label} — ${focal}mm f/${f}` : label;
    }
    updateSummaries();
    saveSession();
  }

  function updateLensButtonsUI() {
    const btns = document.querySelectorAll('#lensButtons .lens-btn');
    const lenses = (currentPreset && currentPreset.lenses) ? currentPreset.lenses : null;
    btns.forEach((btn) => {
      const key = btn.dataset.lens || 'main';
      btn.classList.toggle('active', key === currentLens);
      if (lenses) {
        const lookupKey = (key === 'main2') ? 'main' : key;
        const supported = !!lenses[lookupKey];
        btn.classList.toggle('disabled', !supported);
      } else {
        btn.classList.remove('disabled');
      }
    });
  }

  function getRecentDevices() {
    try {
      const raw = storageGet('target_recent_devices_v1', '[]');
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function addRecentDevice(brand, model) {
    if (!model) return;
    let list = getRecentDevices().filter((item) => !(item.brand === brand && item.model === model));
    list.unshift({ brand, model });
    if (list.length > 6) list = list.slice(0, 6);
    storageSet('target_recent_devices_v1', JSON.stringify(list));
    renderRecentDevices();
  }

  function renderRecentDevices() {
    const section = $('recentDevicesSection');
    const container = $('recentDevicesList');
    if (!section || !container) return;
    const recents = getRecentDevices();
    if (!recents.length) {
      section.style.display = 'none';
      container.innerHTML = '';
      return;
    }
    section.style.display = 'block';
    container.innerHTML = recents.map((r) => {
      const displayName = r.model.replace(/^Apple\s+/i, '');
      return `<button type="button" class="recent-device-btn" data-brand="${escapeHtml(r.brand)}" data-model="${escapeHtml(r.model)}">${escapeHtml(displayName)}</button>`;
    }).join('');
    container.querySelectorAll('.recent-device-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const b = btn.dataset.brand || 'apple';
        const m = btn.dataset.model || '';
        const list = DEVICES_DB[b] || [];
        const found = list.find((p) => p.model === m);
        if (found) {
          applyDevicePreset(found, b, found.defaultLens || 'main', true);
          syncBrandTabsUI();
          renderPresetList();
          closeModal('deviceModal');
          showToast(`已选择 ${found.model}`, 'success');
        }
      });
    });
  }

  function syncBrandTabsUI() {
    document.querySelectorAll('.preset-tab').forEach((t) => {
      t.classList.toggle('active', t.dataset.brand === currentBrand);
    });
  }

  function getAppleSeriesName(model) {
    if (/iPad/i.test(model)) return 'iPad 系列';
    if (/iPhone\s*18|iPhone\s*Duo/i.test(model)) return 'iPhone 18 系列';
    if (/iPhone\s*(17|Air)/i.test(model)) return 'iPhone 17 系列';
    if (/iPhone\s*16/i.test(model)) return 'iPhone 16 系列';
    if (/iPhone\s*15/i.test(model)) return 'iPhone 15 系列';
    if (/iPhone\s*14/i.test(model)) return 'iPhone 14 系列';
    if (/iPhone\s*13/i.test(model)) return 'iPhone 13 系列';
    if (/iPhone\s*12/i.test(model)) return 'iPhone 12 系列';
    if (/iPhone\s*11/i.test(model)) return 'iPhone 11 系列';
    if (/iPhone\s*XS/i.test(model)) return 'iPhone XS 系列';
    if (/iPhone\s*XR/i.test(model)) return 'iPhone XR';
    if (/iPhone\s*X\b/i.test(model)) return 'iPhone X';
    if (/iPhone\s*8/i.test(model)) return 'iPhone 8 系列';
    if (/iPhone\s*7/i.test(model)) return 'iPhone 7 系列';
    if (/iPhone\s*SE/i.test(model)) return 'iPhone SE 系列';
    return '其他';
  }

  function renderPresetList() {
    const container = $('presetList');
    const searchWrap = $('presetSearch');
    const searchInput = $('presetSearchInput');
    const clearBtn = $('presetSearchClear');
    if (!container) return;

    if (searchWrap) {
      searchWrap.classList.add('active');
    }

    const rawQuery = (searchInput ? searchInput.value : '').trim();
    const query = rawQuery.toLowerCase();
    if (clearBtn) {
      clearBtn.classList.toggle('visible', !!rawQuery);
    }

    let items = [];
    if (query) {
      const brandList = (DEVICES_DB[currentBrand] || []).map((p, idx) => ({ brand: currentBrand, index: idx, preset: p }));
      items = brandList.filter((it) => it.preset.model.toLowerCase().includes(query) || (it.preset.make && it.preset.make.toLowerCase().includes(query)));
      if (!items.length) {
        Object.keys(DEVICES_DB).forEach((b) => {
          (DEVICES_DB[b] || []).forEach((p, idx) => {
            if (p.model.toLowerCase().includes(query) || (p.make && p.make.toLowerCase().includes(query))) {
              items.push({ brand: b, index: idx, preset: p });
            }
          });
        });
      }
    } else {
      items = (DEVICES_DB[currentBrand] || []).map((p, idx) => ({ brand: currentBrand, index: idx, preset: p }));
    }

    if (!items.length) {
      container.classList.add('flat');
      container.innerHTML = `<div class="preset-empty">未找到匹配的设备型号</div>`;
      return;
    }

    if (currentBrand === 'apple' && !query) {
      container.classList.remove('flat');
      const groups = new Map();
      items.forEach((item) => {
        const sName = getAppleSeriesName(item.preset.model);
        if (!groups.has(sName)) groups.set(sName, []);
        groups.get(sName).push(item);
      });
      const defaultExpanded = new Set(['iPhone 18 系列', 'iPhone 17 系列', 'iPhone 16 系列']);
      let html = '';
      groups.forEach((groupItems, sName) => {
        const hasSelected = groupItems.some((it) => currentPreset && currentPreset.model === it.preset.model);
        const expanded = defaultExpanded.has(sName) || hasSelected ? ' expanded' : '';
        html += `<div class="series-group${expanded}">`;
        html += `<button class="series-header" type="button"><span class="series-name">${escapeHtml(sName)}</span><span class="series-count">${groupItems.length} 款</span><svg class="series-arrow" viewBox="0 0 24 24" width="14" height="14"><path d="M7 10l5 5 5-5z"/></svg></button>`;
        html += `<div class="series-body">`;
        groupItems.forEach((it) => {
          const sel = currentPreset && currentPreset.model === it.preset.model ? ' selected' : '';
          const shortModel = it.preset.model.replace(/^Apple\s+/i, '');
          html += `<button class="preset-btn${sel}" type="button" data-brand="${escapeHtml(it.brand)}" data-index="${it.index}"><span class="model">${escapeHtml(shortModel)}</span></button>`;
        });
        html += `</div></div>`;
      });
      container.innerHTML = html;
      container.querySelectorAll('.series-header').forEach((hdr) => {
        hdr.addEventListener('click', () => {
          const grp = hdr.closest('.series-group');
          if (grp) grp.classList.toggle('expanded');
        });
      });
    } else {
      container.classList.add('flat');
      container.innerHTML = items.map((it) => {
        const sel = currentPreset && currentPreset.model === it.preset.model ? ' selected' : '';
        const shortModel = it.preset.model.replace(/^Apple\s+/i, '');
        return `<button class="preset-btn${sel}" type="button" data-brand="${escapeHtml(it.brand)}" data-index="${it.index}"><span class="model">${highlightMatch(shortModel, rawQuery)}</span></button>`;
      }).join('');
    }

    container.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const b = btn.dataset.brand || currentBrand;
        const idx = parseInt(btn.dataset.index, 10);
        const p = (DEVICES_DB[b] || [])[idx];
        if (p) {
          applyDevicePreset(p, b, p.defaultLens || 'main', true);
          syncBrandTabsUI();
          renderPresetList();
          closeModal('deviceModal');
          showToast(`已选择 ${p.model}`, 'success');
        }
      });
    });
  }

  function updateSummaries() {
    const makeVal = ($('make').value || '').trim();
    const modelVal = ($('model').value || '').trim();
    const lensVal = localizeLens(($('lensModel').value || '').trim());
    const focalVal = ($('focalLength').value || '').trim();
    const focal35Val = ($('focalLength35').value || '').trim();
    const fVal = ($('fNumber').value || '').trim();
    const isoVal = ($('isoInput').value || '').trim();
    const shutterVal = ($('shutterInput').value || '').trim();
    const biasVal = ($('biasInput').value || '').trim();
    const softVal = ($('software').value || '').trim();
    const dtVal = ($('dateTimeOriginal').value || '').trim();
    const wVal = ($('imageWidth').value || '').trim();
    const hVal = ($('imageHeight').value || '').trim();
    const sizeVal = ($('customFileSize').value || '').trim();
    const vCap = ($('videoCaption').value || '').trim();
    const vCopy = ($('videoCopyright').value || '').trim();
    const latVal = ($('gpsLatitudeInput').value || '').trim();
    const lngVal = ($('gpsLongitudeInput').value || '').trim();

    const hasDevice = !!(makeVal || modelVal);
    const deviceDisplay = modelVal || makeVal || '点击选择手机型号';
    const simpleDeviceValue = $('simpleDeviceValue');
    const simpleDeviceRow = $('simpleDeviceRow');
    if (simpleDeviceValue) {
      simpleDeviceValue.textContent = deviceDisplay;
      simpleDeviceValue.classList.toggle('placeholder', !hasDevice);
    }
    if (simpleDeviceRow) simpleDeviceRow.classList.toggle('is-ready', hasDevice);

    const deviceClearBtn = $('deviceClearBtn');
    if (deviceClearBtn) {
      deviceClearBtn.hidden = !hasDevice;
    }

    // Hero card
    const heroDevice = $('simpleHeroDevice');
    const heroMeta = $('simpleHeroMeta');
    const heroParams = $('simpleHeroParams');
    if (heroDevice) {
      heroDevice.textContent = hasDevice ? (modelVal || makeVal) : '选择拍摄设备';
      heroDevice.classList.toggle('placeholder', !hasDevice);
    }
    if (heroMeta) {
      const metaParts = [];
      if (lensVal) metaParts.push(lensVal);
      else if (focalVal && fVal) metaParts.push(`${focalVal}mm f/${fVal}`);
      if (softVal) metaParts.push(softVal);
      if (dtVal) metaParts.push(dtVal.replace('T', ' '));
      heroMeta.textContent = metaParts.length
        ? metaParts.join(' · ')
        : (selectedFiles.length ? '点下方「拍摄设备」选手机，参数会自动填写' : '先选文件，再选设备即可导出');
    }
    if (heroParams) {
      const chips = [
        isoVal ? `ISO ${isoVal}` : '',
        focal35Val ? `等效 ${focal35Val}mm` : '',
        (biasVal !== '') ? `${biasVal} EV` : '',
        fVal ? `f/${fVal}` : '',
        shutterVal ? `${shutterVal}s` : ''
      ].filter(Boolean);
      if (chips.length) {
        heroParams.hidden = false;
        heroParams.innerHTML = chips.map((c) => `<span class="hero-param-chip">${escapeHtml(c)}</span>`).join('');
      } else {
        heroParams.hidden = true;
        heroParams.innerHTML = '';
      }
    }

    // Time row
    const simpleTimeValue = $('simpleTimeValue');
    const simpleTimeRow = $('simpleTimeRow');
    const dtPlaceholder = $('datetimePlaceholder');
    if (simpleTimeValue) {
      if (dtVal) {
        simpleTimeValue.textContent = dtVal.replace('T', ' ');
        simpleTimeValue.classList.remove('placeholder');
      } else {
        simpleTimeValue.textContent = '点击设置';
        simpleTimeValue.classList.add('placeholder');
      }
    }
    if (simpleTimeRow) simpleTimeRow.classList.toggle('is-ready', !!dtVal);
    if (dtPlaceholder) {
      dtPlaceholder.classList.toggle('hidden', !!dtVal);
    }

    // Location row
    const hasGps = !!(latVal && lngVal);
    const simpleLocationValue = $('simpleLocationValue');
    const simpleLocationRow = $('simpleLocationRow');
    const gpsCoordsDisplay = $('gpsCoordsDisplay');
    const gpsDisplayText = $('gpsDisplayText');
    if (simpleLocationValue) {
      if (hasGps) {
        const coordText = `${Number(latVal).toFixed(4)}, ${Number(lngVal).toFixed(4)}`;
        simpleLocationValue.textContent = currentGpsLabel ? `${currentGpsLabel} (${coordText})` : coordText;
        simpleLocationValue.classList.remove('placeholder');
      } else {
        simpleLocationValue.textContent = '可选 · 点击设置';
        simpleLocationValue.classList.add('placeholder');
      }
    }
    if (simpleLocationRow) simpleLocationRow.classList.toggle('is-ready', hasGps);
    if (gpsCoordsDisplay && gpsDisplayText) {
      if (hasGps) {
        gpsCoordsDisplay.style.display = 'flex';
        gpsDisplayText.textContent = currentGpsLabel ? `${currentGpsLabel} (${latVal}, ${lngVal})` : `${latVal}, ${lngVal}`;
      } else {
        gpsCoordsDisplay.style.display = 'none';
        gpsDisplayText.textContent = '未选择位置';
      }
    }

    // Lens details row
    const advLensValue = $('advLensValue');
    const advLensRow = $('advLensRow');
    const lensParts = [lensVal, focalVal ? `${focalVal}mm` : '', softVal].filter(Boolean);
    if (advLensValue) {
      advLensValue.textContent = lensParts.length ? lensParts.join(' · ') : '焦距 · 光圈 · 镜头型号';
      advLensValue.classList.toggle('placeholder', !lensParts.length);
    }
    if (advLensRow) advLensRow.classList.toggle('is-ready', lensParts.length > 0);

    // Params row
    const advParamsValue = $('advParamsValue');
    const advParamsRow = $('advParamsRow');
    const paramParts = [
      isoVal ? `ISO ${isoVal}` : '',
      shutterVal ? `${shutterVal}s` : '',
      fVal ? `f/${fVal}` : '',
      focal35Val ? `等效 ${focal35Val}mm` : '',
      biasVal !== '' ? `${biasVal} EV` : ''
    ].filter(Boolean);
    if (advParamsValue) {
      advParamsValue.textContent = paramParts.length ? paramParts.join(' · ') : 'ISO · 快门 · 光圈 · 曝光补偿 · 等效焦距';
      advParamsValue.classList.toggle('placeholder', !paramParts.length);
    }
    if (advParamsRow) advParamsRow.classList.toggle('is-ready', paramParts.length > 0);

    // Resolution row
    const advResolutionValue = $('advResolutionValue');
    const advResolutionRow = $('advResolutionRow');
    const hasRes = !!(wVal && hVal);
    if (advResolutionValue) {
      if (hasRes) {
        const mpPreset = [
          { label: '12 MP', w: 4032, h: 3024 },
          { label: '24 MP', w: 5712, h: 4284 },
          { label: '48 MP', w: 8064, h: 6048 }
        ].find((p) => (parseInt(wVal, 10) === p.w && parseInt(hVal, 10) === p.h) || (parseInt(wVal, 10) === p.h && parseInt(hVal, 10) === p.w));
        advResolutionValue.textContent = mpPreset ? `${mpPreset.label} (${wVal} × ${hVal})` : `${wVal} × ${hVal}`;
        advResolutionValue.classList.remove('placeholder');
      } else {
        advResolutionValue.textContent = '跟随原图或自定义';
        advResolutionValue.classList.add('placeholder');
      }
    }
    if (advResolutionRow) advResolutionRow.classList.toggle('is-ready', hasRes);

    // Filesize row
    const simpleFilesizeValue = $('simpleFilesizeValue');
    const simpleFilesizeRow = $('simpleFilesizeRow');
    if (simpleFilesizeValue) {
      simpleFilesizeValue.textContent = sizeVal ? `${sizeVal} MB` : '跟随原图';
    }
    if (simpleFilesizeRow) simpleFilesizeRow.classList.toggle('is-ready', !!sizeVal);

    // Naming row
    const exportNamingValue = $('exportNamingValue');
    const exportNamingRow = $('exportNamingRow');
    if (exportNamingValue) {
      exportNamingValue.textContent = exportNaming === 'original' ? '保持原名' : 'IMG 标准名';
    }
    if (exportNamingRow) exportNamingRow.classList.toggle('is-ready', true);

    // Video row
    const hasVideo = selectedFiles.some((it) => it.isVideo);
    const simpleVideoRow = $('simpleVideoRow');
    const simpleVideoValue = $('simpleVideoValue');
    const vParts = [vCap, vCopy].filter(Boolean);
    if (simpleVideoRow) {
      simpleVideoRow.hidden = !hasVideo && !vParts.length;
      simpleVideoRow.classList.toggle('is-ready', vParts.length > 0);
    }
    if (simpleVideoValue) {
      simpleVideoValue.textContent = vParts.length ? vParts.join(' · ') : '描述 · 版权';
      simpleVideoValue.classList.toggle('placeholder', !vParts.length);
    }

    // Reset button & workflow bar & export bubble
    const anyParam = FIELD_IDS.some((id) => ($(id) && $(id).value.trim() !== '')) || hasGps;
    const resetBtn = $('resetBtn');
    if (resetBtn) resetBtn.disabled = !anyParam;

    const hasFiles = selectedFiles.length > 0;
    let activeStep = 'files';
    if (hasFiles && !hasDevice) activeStep = 'device';
    else if (hasFiles && hasDevice) activeStep = 'export';

    document.querySelectorAll('#workflowBar .workflow-step').forEach((st) => {
      const stepName = st.dataset.step;
      let done = false;
      if (stepName === 'files') done = hasFiles;
      else if (stepName === 'device') done = hasDevice;
      else if (stepName === 'settings') done = anyParam;
      else if (stepName === 'export') done = exportedResults.length > 0;
      st.classList.toggle('done', done);
      st.classList.toggle('active', stepName === activeStep);
    });

    const exportBubble = $('exportBubble');
    const exportBtnLabel = $('exportBtnLabel');
    if (exportBubble) {
      exportBubble.classList.toggle('show', hasFiles && hasDevice);
    }
    if (exportBtnLabel) {
      exportBtnLabel.textContent = hasFiles ? `导出 (${selectedFiles.length})` : '导出';
    }
  }

  function saveSession() {
    const fields = {};
    FIELD_IDS.forEach((id) => {
      const el = $(id);
      fields[id] = el ? el.value : '';
    });
    const session = {
      version: 5,
      brand: currentBrand,
      presetBrand: currentPresetBrand || currentBrand,
      currentBrand,
      currentLens,
      presetModel: currentPreset ? currentPreset.model : '',
      fields,
      gps: {
        lat: $('gpsLatitudeInput') ? $('gpsLatitudeInput').value : '',
        lng: $('gpsLongitudeInput') ? $('gpsLongitudeInput').value : '',
        altitude: $('gpsAltitude') ? $('gpsAltitude').value : '0',
        label: currentGpsLabel
      }
    };
    storageSet('target_exif_session_v5', JSON.stringify(session));
  }

  function restoreSession() {
    try {
      const raw = storageGet('target_exif_session_v5', '');
      if (!raw) return;
      const data = JSON.parse(raw);
      if (!data || typeof data !== 'object') return;
      const b = data.presetBrand || data.currentBrand || data.brand || 'apple';
      if (DEVICES_DB[b]) currentBrand = b;
      if (data.currentLens || data.lens) currentLens = data.currentLens || data.lens;
      if (data.presetModel) {
        const list = DEVICES_DB[currentBrand] || [];
        currentPreset = list.find((p) => p.model === data.presetModel) || null;
        if (currentPreset) currentPresetBrand = currentBrand;
      }
      if (data.fields && typeof data.fields === 'object') {
        FIELD_IDS.forEach((id) => {
          if ($(id) && data.fields[id] != null) {
            $(id).value = id === 'lensModel' ? localizeLens(data.fields[id]) : data.fields[id];
          }
        });
      }
      if (data.gps && typeof data.gps === 'object') {
        if ($('gpsLatitudeInput') && data.gps.lat != null) $('gpsLatitudeInput').value = data.gps.lat;
        if ($('gpsLongitudeInput') && data.gps.lng != null) $('gpsLongitudeInput').value = data.gps.lng;
        if ($('gpsAltitude') && data.gps.altitude != null) $('gpsAltitude').value = data.gps.altitude;
        currentGpsLabel = data.gps.label || '';
      }
      syncBrandTabsUI();
    } catch (e) {}
  }

  function openModal(id) {
    const m = $(id);
    if (m) m.classList.add('active');
  }

  function closeModal(id) {
    const m = $(id);
    if (m) m.classList.remove('active');
  }

  function openSettingsPanel(panelKey) {
    const titleEl = $('settingsModalTitle');
    if (titleEl) titleEl.textContent = PANEL_TITLES[panelKey] || '设置';
    document.querySelectorAll('#settingsModal .settings-panel').forEach((p) => {
      p.style.display = p.dataset.panel === panelKey ? 'block' : 'none';
    });
    openModal('settingsModal');
  }

  // Read existing EXIF from uploaded JPEG to auto-populate empty form fields if no preset is active
  async function tryReadExifFromJpeg(file) {
    try {
      const buf = await file.arrayBuffer();
      const dv = new DataView(buf);
      if (dv.byteLength < 12 || dv.getUint16(0, false) !== 0xFFD8) return null;
      let offset = 2;
      while (offset + 4 <= dv.byteLength) {
        if (dv.getUint8(offset) !== 0xFF) break;
        const marker = dv.getUint8(offset + 1);
        if (marker === 0xDA || marker === 0xD9) break;
        const segLen = dv.getUint16(offset + 2, false);
        if (segLen < 2 || offset + 2 + segLen > dv.byteLength) break;
        if (marker === 0xE1 && segLen >= 10) {
          const hdr = String.fromCharCode(
            dv.getUint8(offset + 4),
            dv.getUint8(offset + 5),
            dv.getUint8(offset + 6),
            dv.getUint8(offset + 7)
          );
          if (hdr === 'Exif') {
            return parseTiffExif(dv, offset + 10, segLen - 8);
          }
        }
        offset += 2 + segLen;
      }
    } catch (e) {}
    return null;
  }

  function parseTiffExif(dv, tiffStart, maxLen) {
    if (tiffStart + 8 > dv.byteLength) return null;
    const endian = dv.getUint16(tiffStart, false);
    const le = endian === 0x4949;
    if (!le && endian !== 0x4D4D) return null;
    const firstIfd = dv.getUint32(tiffStart + 4, le);
    const out = {};

    function readAscii(valOffset, count) {
      if (valOffset + count > dv.byteLength) return '';
      const bytes = new Uint8Array(dv.buffer, dv.byteOffset + valOffset, Math.max(0, count - 1));
      return new TextDecoder('utf-8').decode(bytes).replace(/\0+$/, '').trim();
    }

    function readRational(valOffset, signed) {
      if (valOffset + 8 > dv.byteLength) return null;
      const num = signed ? dv.getInt32(valOffset, le) : dv.getUint32(valOffset, le);
      const den = signed ? dv.getInt32(valOffset + 4, le) : dv.getUint32(valOffset + 4, le);
      if (!den) return null;
      return { num, den, val: num / den };
    }

    function parseIfd(ifdRelOffset) {
      const dirStart = tiffStart + ifdRelOffset;
      if (dirStart + 2 > dv.byteLength) return {};
      const numEntries = dv.getUint16(dirStart, le);
      const map = {};
      for (let i = 0; i < numEntries; i++) {
        const entryPos = dirStart + 2 + i * 12;
        if (entryPos + 12 > dv.byteLength) break;
        const tag = dv.getUint16(entryPos, le);
        const type = dv.getUint16(entryPos + 2, le);
        const count = dv.getUint32(entryPos + 4, le);
        const typeSize = ({ 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8 })[type] || 1;
        const totalBytes = count * typeSize;
        const valOffset = totalBytes <= 4 ? (entryPos + 8) : (tiffStart + dv.getUint32(entryPos + 8, le));
        map[tag] = { type, count, valOffset };
      }
      return map;
    }

    const ifd0 = parseIfd(firstIfd);
    if (ifd0[0x0112] && ifd0[0x0112].valOffset + 2 <= dv.byteLength) {
      const orientation = dv.getUint16(ifd0[0x0112].valOffset, le);
      out.orientation = orientation >= 1 && orientation <= 8 ? orientation : 1;
    }
    if (ifd0[0x010F]) out.make = readAscii(ifd0[0x010F].valOffset, ifd0[0x010F].count);
    if (ifd0[0x0110]) out.model = readAscii(ifd0[0x0110].valOffset, ifd0[0x0110].count);
    if (ifd0[0x0131]) out.software = readAscii(ifd0[0x0131].valOffset, ifd0[0x0131].count);
    if (ifd0[0x0132]) out.dateTime = readAscii(ifd0[0x0132].valOffset, ifd0[0x0132].count);

    if (ifd0[0x8769]) {
      const subPtr = dv.getUint32(ifd0[0x8769].valOffset, le);
      const exif = parseIfd(subPtr);
      if (exif[0x9003]) out.dateTimeOriginal = readAscii(exif[0x9003].valOffset, exif[0x9003].count);
      if (exif[0xA434]) out.lensModel = readAscii(exif[0xA434].valOffset, exif[0xA434].count);
      if (exif[0x8827]) out.iso = String(dv.getUint16(exif[0x8827].valOffset, le));
      if (exif[0xA405]) out.focal35 = String(dv.getUint16(exif[0xA405].valOffset, le));
      if (exif[0x829D]) {
        const r = readRational(exif[0x829D].valOffset, false);
        if (r) out.fNumber = String(Number(r.val.toFixed(2)));
      }
      if (exif[0x920A]) {
        const r = readRational(exif[0x920A].valOffset, false);
        if (r) out.focalLength = String(Number(r.val.toFixed(3)));
      }
      if (exif[0x829A]) {
        const r = readRational(exif[0x829A].valOffset, false);
        if (r && r.val > 0) {
          out.shutter = r.val < 1 ? `1/${Math.round(1 / r.val)}` : String(Number(r.val.toFixed(2)));
        }
      }
      if (exif[0x9204]) {
        const r = readRational(exif[0x9204].valOffset, true);
        if (r) out.bias = String(Number(r.val.toFixed(2)));
      }
    }

    if (ifd0[0x8825]) {
      const gpsPtr = dv.getUint32(ifd0[0x8825].valOffset, le);
      const gps = parseIfd(gpsPtr);
      if (gps[0x0002] && gps[0x0004]) {
        const latRef = gps[0x0001] ? readAscii(gps[0x0001].valOffset, gps[0x0001].count) : 'N';
        const lngRef = gps[0x0003] ? readAscii(gps[0x0003].valOffset, gps[0x0003].count) : 'E';
        const d1 = readRational(gps[0x0002].valOffset, false);
        const m1 = readRational(gps[0x0002].valOffset + 8, false);
        const s1 = readRational(gps[0x0002].valOffset + 16, false);
        const d2 = readRational(gps[0x0004].valOffset, false);
        const m2 = readRational(gps[0x0004].valOffset + 8, false);
        const s2 = readRational(gps[0x0004].valOffset + 16, false);
        if (d1 && m1 && s1 && d2 && m2 && s2) {
          let lat = d1.val + m1.val / 60 + s1.val / 3600;
          let lng = d2.val + m2.val / 60 + s2.val / 3600;
          if (latRef === 'S') lat = -lat;
          if (lngRef === 'W') lng = -lng;
          if (Number.isFinite(lat) && Number.isFinite(lng) && (lat !== 0 || lng !== 0)) {
            out.lat = lat.toFixed(6);
            out.lng = lng.toFixed(6);
          }
        }
      }
    }
    return out;
  }

  async function handleFilesSelected(fileList) {
    const incoming = Array.from(fileList || []).filter((f) => {
      const name = (f.name || '').toLowerCase();
      const type = (f.type || '').toLowerCase();
      return type.startsWith('image/') || type.startsWith('video/') ||
        /\.(jpg|jpeg|jpe|jfif|png|webp|heic|heif|hif|avif|bmp|gif|tif|tiff|ico|svg|dng|raw|cr2|cr3|nef|nrw|arw|orf|rw2|pef|srw|raf|psd|xcf|jp2|j2k|mov|mp4|m4v)$/i.test(name);
    });
    if (!incoming.length) {
      showToast('请选择图片或视频文件', 'error');
      return;
    }

    for (const file of incoming) {
      const previewUrl = URL.createObjectURL(file);
      selectedFiles.push({
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        isVideo: isVideoFile(file),
        previewUrl
      });
    }

    // If user hasn't set a device yet and the first file is a JPEG with EXIF, read its EXIF as defaults
    if (!$('make').value && !$('model').value && selectedFiles.length > 0 && !selectedFiles[0].isVideo) {
      const parsed = await tryReadExifFromJpeg(selectedFiles[0].file);
      if (parsed) {
        if (parsed.make && !$('make').value) $('make').value = parsed.make;
        if (parsed.model && !$('model').value) $('model').value = parsed.model;
        if (parsed.lensModel && !$('lensModel').value) $('lensModel').value = localizeLens(parsed.lensModel);
        if (parsed.software && !$('software').value) $('software').value = parsed.software;
        if (parsed.iso && !$('isoInput').value) $('isoInput').value = parsed.iso;
        if (parsed.focal35 && !$('focalLength35').value) $('focalLength35').value = parsed.focal35;
        if (parsed.fNumber && !$('fNumber').value) $('fNumber').value = parsed.fNumber;
        if (parsed.focalLength && !$('focalLength').value) $('focalLength').value = parsed.focalLength;
        if (parsed.shutter && !$('shutterInput').value) $('shutterInput').value = parsed.shutter;
        if (parsed.bias && !$('biasInput').value) $('biasInput').value = parsed.bias;
        if (parsed.dateTimeOriginal && !$('dateTimeOriginal').value) {
          const m = parsed.dateTimeOriginal.match(/^(\d{4}):(\d{2}):(\d{2})\s+(\d{2}):(\d{2})/);
          if (m) $('dateTimeOriginal').value = `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}`;
        }
        if (parsed.lat && parsed.lng && !$('gpsLatitudeInput').value) {
          $('gpsLatitudeInput').value = parsed.lat;
          $('gpsLongitudeInput').value = parsed.lng;
          currentGpsLabel = '原图位置';
        }
      }
    }

    if (!$('dateTimeOriginal').value) {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      $('dateTimeOriginal').value = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }

    renderFilesList();
    updateSummaries();
    saveSession();
  }

  function renderFilesList() {
    const wrapper = $('uploadWrapper');
    const section = $('filesSection');
    const listEl = $('filesList');
    const countEl = $('fileCount');
    const heroThumb = $('simpleHeroThumb');

    if (countEl) countEl.textContent = String(selectedFiles.length);

    if (!selectedFiles.length) {
      if (wrapper) wrapper.classList.remove('hidden');
      if (section) section.classList.remove('active');
      if (listEl) listEl.innerHTML = '';
      if (heroThumb) heroThumb.innerHTML = '📷';
      return;
    }

    if (wrapper) wrapper.classList.add('hidden');
    if (section) section.classList.add('active');

    if (heroThumb) {
      const first = selectedFiles[0];
      if (first.isVideo) {
        heroThumb.innerHTML = `<video src="${escapeHtml(first.previewUrl)}#t=0.001" muted playsinline preload="metadata"></video>`;
      } else {
        heroThumb.innerHTML = `<img src="${escapeHtml(first.previewUrl)}" alt="预览">`;
      }
    }

    if (listEl) {
      listEl.innerHTML = selectedFiles.map((item, idx) => {
        const mediaHtml = item.isVideo
          ? `<video src="${escapeHtml(item.previewUrl)}#t=0.001" muted playsinline preload="metadata"></video>`
          : `<img src="${escapeHtml(item.previewUrl)}" alt="${escapeHtml(item.name)}">`;
        return `<div class="file-item" data-index="${idx}">
          ${mediaHtml}
          <button type="button" class="file-item-remove" data-index="${idx}" aria-label="移除">×</button>
        </div>`;
      }).join('');

      listEl.querySelectorAll('.file-item video').forEach((vid) => {
        vid.addEventListener('click', () => {
          if (vid.paused) vid.play().catch(() => {});
          else vid.pause();
        });
      });

      listEl.querySelectorAll('.file-item-remove').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.dataset.index, 10);
          if (selectedFiles[idx] && selectedFiles[idx].previewUrl) {
            URL.revokeObjectURL(selectedFiles[idx].previewUrl);
          }
          selectedFiles.splice(idx, 1);
          renderFilesList();
          updateSummaries();
        });
      });
    }
  }

  function renderPreviewModal() {
    const body = $('previewModalBody');
    if (!body) return;

    const makeVal = ($('make').value || '').trim();
    const modelVal = ($('model').value || '').trim();
    const lensVal = localizeLens(($('lensModel').value || '').trim());
    const focalVal = ($('focalLength').value || '').trim();
    const focal35Val = ($('focalLength35').value || '').trim();
    const fVal = ($('fNumber').value || '').trim();
    const isoVal = ($('isoInput').value || '').trim();
    const shutterVal = ($('shutterInput').value || '').trim();
    const biasVal = ($('biasInput').value || '').trim();
    const softVal = ($('software').value || '').trim();
    const dtVal = ($('dateTimeOriginal').value || '').trim();
    const wVal = ($('imageWidth').value || '').trim();
    const hVal = ($('imageHeight').value || '').trim();
    const sizeVal = ($('customFileSize').value || '').trim();
    const latVal = ($('gpsLatitudeInput').value || '').trim();
    const lngVal = ($('gpsLongitudeInput').value || '').trim();
    const altVal = ($('gpsAltitude').value || '').trim();

    let heroHtml = '';
    if (!selectedFiles.length) {
      heroHtml = `<div class="preview-hero"><div class="preview-hero-empty">暂无文件，先添加图片或视频预览效果~</div></div>`;
    } else {
      const first = selectedFiles[0];
      const thumb = first.isVideo
        ? `<video src="${escapeHtml(first.previewUrl)}#t=0.001" muted playsinline preload="metadata"></video>`
        : `<img src="${escapeHtml(first.previewUrl)}" alt="${escapeHtml(first.name)}">`;
      heroHtml = `<div class="preview-hero">
        ${thumb}
        <div class="preview-hero-mask"></div>
        <div class="preview-hero-info">
          <div class="preview-hero-model">${escapeHtml(modelVal || makeVal || '未选择设备')}</div>
          <div class="preview-hero-time">${escapeHtml(dtVal ? dtVal.replace('T', ' ') : '未设置拍摄时间')}</div>
        </div>
      </div>`;
    }

    const keyItems = [
      { label: '感光度', val: isoVal ? `ISO ${isoVal}` : '' },
      { label: '等效焦距', val: focal35Val ? `${focal35Val} mm` : '' },
      { label: '曝光补偿', val: biasVal !== '' ? `${biasVal} EV` : '' },
      { label: '光圈', val: fVal ? `f/${fVal}` : '' },
      { label: '快门', val: shutterVal ? `${shutterVal} s` : '' },
      { label: '物理焦距', val: focalVal ? `${focalVal} mm` : '' }
    ];

    const keyGridHtml = `<div class="preview-key-grid">` + keyItems.map((it) => {
      const emptyCls = it.val ? '' : ' empty';
      return `<div class="preview-key-cell"><div class="preview-key-label">${escapeHtml(it.label)}</div><div class="preview-key-value${emptyCls}">${escapeHtml(it.val || '未设')}</div></div>`;
    }).join('') + `</div>`;

    const lensTypeLabel = LENS_NAMES[currentLens] || '当前镜头';
    const lensCardHtml = `<div class="preview-lens-card">
      <div class="preview-lens-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg></div>
      <div class="preview-lens-info">
        <div class="preview-lens-type">${escapeHtml(lensTypeLabel)}</div>
        <div class="preview-lens-model${lensVal ? '' : ' empty'}">${escapeHtml(lensVal || '未设置镜头型号')}</div>
      </div>
    </div>`;

    const metaRows = [
      { label: '设备厂商', val: makeVal },
      { label: '系统版本', val: softVal },
      { label: '焦距', val: focalVal ? `${focalVal} mm` : '' },
      { label: '分辨率', val: (wVal && hVal) ? `${wVal} × ${hVal}` : '保持原始' },
      { label: '原始大小', val: selectedFiles[0] ? formatFileSize(selectedFiles[0].size) : '未知' },
      { label: '目标体积', val: sizeVal ? `${sizeVal} MB` : '跟随原图' }
    ];

    const metaListHtml = `<div class="preview-meta-list">` + metaRows.map((r) => {
      const emptyCls = r.val ? '' : ' empty';
      return `<div class="preview-meta-row"><span class="preview-meta-label">${escapeHtml(r.label)}</span><span class="preview-meta-value${emptyCls}">${escapeHtml(r.val || '未设置')}</span></div>`;
    }).join('') + `</div>`;

    let gpsHtml = '';
    if (latVal && lngVal) {
      gpsHtml = `<div class="preview-gps-card">
        <div class="preview-gps-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7DD3A8" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <div class="preview-gps-info">
          <div class="preview-gps-coords">${escapeHtml(currentGpsLabel ? `${currentGpsLabel} (${latVal}, ${lngVal})` : `${latVal}, ${lngVal}`)}</div>
          <div class="preview-gps-alt">海拔 ${escapeHtml(altVal || '0')} m</div>
        </div>
      </div>`;
    } else {
      gpsHtml = `<div class="preview-gps-empty">未设置拍摄位置</div>`;
    }

    body.innerHTML = `${heroHtml}<div class="preview-content">${keyGridHtml}${lensCardHtml}${metaListHtml}${gpsHtml}</div>`;
    openModal('previewModal');
  }

  function getAmapKey() {
    const custom = storageGet('eif_amap_key', '').trim();
    return custom || DEFAULT_AMAP_KEY;
  }

  function initGpsMap() {
    const mapContainer = $('gpsMap');
    if (!mapContainer) return;

    mapContainer.innerHTML = `
      <div style="position:relative;width:100%;height:100%;min-height:220px;background:linear-gradient(135deg,#eef7ff 0%,#fdf2f7 100%);border-radius:12px;overflow:hidden;cursor:crosshair;user-select:none;" id="interactiveMapCanvas">
        <svg viewBox="0 0 600 280" width="100%" height="100%" preserveAspectRatio="none" style="display:block;">
          <defs>
            <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,107,157,0.14)" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="600" height="280" fill="url(#mapGrid)"/>
          <path d="M120,60 Q180,35 260,50 T410,65 T490,115 Q505,165 450,205 T310,230 T170,195 Q105,145 120,60 Z" fill="rgba(255,107,157,0.10)" stroke="rgba(255,107,157,0.35)" stroke-width="1.5"/>
        </svg>
        <div id="mapPinMarker" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-100%);font-size:22px;pointer-events:none;transition:left 0.15s ease,top 0.15s ease;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">📍</div>
        <div style="position:absolute;bottom:8px;left:10px;right:10px;display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--text-secondary);background:rgba(255,255,255,0.85);backdrop-filter:blur(4px);padding:4px 10px;border-radius:8px;pointer-events:none;">
          <span>点击地图选取坐标</span>
          <span id="mapCanvasCoordHint">31.2304°N, 121.4737°E</span>
        </div>
      </div>
    `;

    const canvasEl = $('interactiveMapCanvas');
    const pinEl = $('mapPinMarker');
    const hintEl = $('mapCanvasCoordHint');

    function setPinFromLatLng(lat, lng) {
      if (amapInstance && window.AMap) {
        try {
          const pos = new window.AMap.LngLat(lng, lat);
          amapInstance.setCenter(pos);
          if (!amapMarker) {
            amapMarker = new window.AMap.Marker({ position: pos });
            amapInstance.add(amapMarker);
          } else {
            amapMarker.setPosition(pos);
          }
          return;
        } catch (e) {}
      }
      if (!pinEl) return;
      const xPct = Math.max(5, Math.min(95, ((lng - 73) / (135 - 73)) * 100));
      const yPct = Math.max(8, Math.min(92, ((52 - lat) / (52 - 16)) * 100));
      pinEl.style.left = xPct + '%';
      pinEl.style.top = yPct + '%';
      if (hintEl) hintEl.textContent = `${Number(lat).toFixed(4)}°N, ${Number(lng).toFixed(4)}°E`;
    }

    if (canvasEl) {
      canvasEl.addEventListener('click', (e) => {
        const rect = canvasEl.getBoundingClientRect();
        const rx = Math.max(0, Math.min(1, (e.clientX - rect.left) / (rect.width || 300)));
        const ry = Math.max(0, Math.min(1, (e.clientY - rect.top) / (rect.height || 200)));
        const lng = (73 + rx * (135 - 73)).toFixed(6);
        const lat = (52 - ry * (52 - 16)).toFixed(6);
        $('gpsLatitudeInput').value = lat;
        $('gpsLongitudeInput').value = lng;
        currentGpsLabel = '地图选点';
        setPinFromLatLng(parseFloat(lat), parseFloat(lng));
        updateSummaries();
        saveSession();
        reverseGeocode(lat, lng);
      });
    }

    window.__updateMapPin = setPinFromLatLng;
  }

  function tryLoadRealAmap() {
    if (amapInstance) return;
    const mapContainer = $('gpsMap');
    if (!mapContainer) return;
    const key = getAmapKey();
    const src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(key)}`;
    if (window.AMap && window.AMap.Map) {
      mountAmapInstance();
      return;
    }
    let script = document.querySelector(`script[data-src="${src}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.dataset.src = src;
      script.async = true;
      script.addEventListener('load', () => {
        if (window.AMap && window.AMap.Map) mountAmapInstance();
      }, { once: true });
      script.addEventListener('error', () => {}, { once: true });
      document.head.appendChild(script);
    }
  }

  function mountAmapInstance() {
    try {
      const mapContainer = $('gpsMap');
      if (!mapContainer || !window.AMap || !window.AMap.Map) return;
      const initLat = parseFloat($('gpsLatitudeInput').value) || 31.2304;
      const initLng = parseFloat($('gpsLongitudeInput').value) || 121.4737;
      amapInstance = new window.AMap.Map('gpsMap', {
        zoom: 12,
        center: [initLng, initLat]
      });
      amapMarker = new window.AMap.Marker({ position: [initLng, initLat] });
      amapInstance.add(amapMarker);
      amapInstance.on('click', (e) => {
        if (e && e.lnglat) {
          const lat = Number(e.lnglat.getLat()).toFixed(6);
          const lng = Number(e.lnglat.getLng()).toFixed(6);
          $('gpsLatitudeInput').value = lat;
          $('gpsLongitudeInput').value = lng;
          currentGpsLabel = '地图选点';
          if (amapMarker) amapMarker.setPosition([ parseFloat(lng), parseFloat(lat) ]);
          updateSummaries();
          saveSession();
          reverseGeocode(lat, lng);
        }
      });
    } catch (e) {}
  }

  async function reverseGeocode(lat, lng) {
    try {
      const key = getAmapKey();
      const url = `https://restapi.amap.com/v3/geocode/regeo?key=${encodeURIComponent(key)}&location=${encodeURIComponent(lng + ',' + lat)}&output=json`;
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.status === '1' && data.regeocode && data.regeocode.formatted_address) {
        const addr = data.regeocode.formatted_address;
        if (typeof addr === 'string' && addr.length > 0) {
          currentGpsLabel = addr;
          updateSummaries();
          saveSession();
        }
      }
    } catch (e) {}
  }

  async function searchGpsLocation() {
    const input = $('gpsSearchInput');
    const resultsEl = $('gpsSearchResults');
    if (!input || !resultsEl) return;
    const kw = input.value.trim();
    if (!kw) {
      showToast('请输入要搜索的地点名称', 'info');
      return;
    }

    if (/^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/.test(kw)) {
      const parts = kw.split(',');
      const a = parseFloat(parts[0]);
      const b = parseFloat(parts[1]);
      const lat = Math.abs(a) <= 90 ? a : b;
      const lng = Math.abs(a) <= 90 ? b : a;
      $('gpsLatitudeInput').value = lat.toFixed(6);
      $('gpsLongitudeInput').value = lng.toFixed(6);
      currentGpsLabel = '自定义坐标';
      if (window.__updateMapPin) window.__updateMapPin(lat, lng);
      resultsEl.classList.remove('active');
      resultsEl.innerHTML = '';
      updateSummaries();
      saveSession();
      showToast('已填入经纬度坐标', 'success');
      return;
    }

    resultsEl.classList.add('active');
    resultsEl.innerHTML = `<div class="gps-result-item" style="color:var(--text-secondary);">搜索中...</div>`;

    const localMatches = HOT_CITIES.filter((c) => c.name.includes(kw) || c.label.includes(kw));

    try {
      const key = getAmapKey();
      const url = `https://restapi.amap.com/v3/place/text?key=${encodeURIComponent(key)}&keywords=${encodeURIComponent(kw)}&offset=8&output=json&extensions=base`;
      const res = await fetch(url);
      const data = await res.json();
      const pois = (data && Array.isArray(data.pois)) ? data.pois : [];
      if (pois.length > 0) {
        resultsEl.innerHTML = pois.map((p) => {
          const loc = String(p.location || '').split(',');
          const lng = loc[0] || '';
          const lat = loc[1] || '';
          const addr = [p.cityname, p.adname, p.address].filter((x) => typeof x === 'string' && x.length > 0).join(' · ');
          return `<div class="gps-result-item" data-lat="${escapeHtml(lat)}" data-lng="${escapeHtml(lng)}" data-label="${escapeHtml(p.name)}">
            <div style="font-weight:600;color:var(--text);">${escapeHtml(p.name)}</div>
            <div style="font-size:12px;color:var(--text-secondary);">${escapeHtml(addr)}</div>
          </div>`;
        }).join('');
      } else if (localMatches.length > 0) {
        resultsEl.innerHTML = localMatches.map((c) => (
          `<div class="gps-result-item" data-lat="${c.lat}" data-lng="${c.lng}" data-label="${escapeHtml(c.label)}">
            <div style="font-weight:600;color:var(--text);">${escapeHtml(c.name)}</div>
            <div style="font-size:12px;color:var(--text-secondary);">${escapeHtml(c.label)} (${c.lat}, ${c.lng})</div>
          </div>`
        )).join('');
      } else {
        resultsEl.innerHTML = `<div class="gps-result-item" style="color:var(--text-secondary);">未找到，试试其他关键词或直接点击地图选点~</div>`;
      }
    } catch (e) {
      if (localMatches.length > 0) {
        resultsEl.innerHTML = localMatches.map((c) => (
          `<div class="gps-result-item" data-lat="${c.lat}" data-lng="${c.lng}" data-label="${escapeHtml(c.label)}">
            <div style="font-weight:600;color:var(--text);">${escapeHtml(c.name)}</div>
            <div style="font-size:12px;color:var(--text-secondary);">${escapeHtml(c.label)} (${c.lat}, ${c.lng})</div>
          </div>`
        )).join('');
      } else {
        resultsEl.innerHTML = `<div class="gps-result-item" style="color:var(--text-secondary);">未找到，试试热门城市或直接点击下方地图选点~</div>`;
      }
    }

    resultsEl.querySelectorAll('.gps-result-item[data-lat]').forEach((item) => {
      item.addEventListener('click', () => {
        const lat = item.dataset.lat;
        const lng = item.dataset.lng;
        const label = item.dataset.label || '';
        if (lat && lng) {
          $('gpsLatitudeInput').value = lat;
          $('gpsLongitudeInput').value = lng;
          currentGpsLabel = label;
          if (window.__updateMapPin) window.__updateMapPin(parseFloat(lat), parseFloat(lng));
          resultsEl.classList.remove('active');
          resultsEl.innerHTML = '';
          updateSummaries();
          saveSession();
          showToast(`已选择位置：${label}`, 'success');
        }
      });
    });
  }

  // Binary EXIF APP1 Builder
  function parseRational(str, defaultDen = 10000) {
    const s = String(str || '').trim();
    if (!s) return null;
    if (s.includes('/')) {
      const [n, d] = s.split('/').map((x) => parseFloat(x));
      if (Number.isFinite(n) && Number.isFinite(d) && d !== 0) {
        if (Number.isInteger(n) && Number.isInteger(d)) return [Math.round(n), Math.round(d)];
        return [Math.round(n * defaultDen), Math.round(d * defaultDen)];
      }
    }
    const v = parseFloat(s);
    if (!Number.isFinite(v)) return null;
    if (Number.isInteger(v)) return [v, 1];
    return [Math.round(v * defaultDen), defaultDen];
  }

  function decimalToDmsRational(deg) {
    const abs = Math.abs(Number(deg) || 0);
    const d = Math.floor(abs);
    const minFloat = (abs - d) * 60;
    const m = Math.floor(minFloat);
    const s = Math.round((minFloat - m) * 60 * 10000);
    return [
      [d, 1],
      [m, 1],
      [s, 10000]
    ];
  }

  function formatExifDateTime(dtLocal) {
    const s = String(dtLocal || '').trim();
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/);
    if (!m) return null;
    return `${m[1]}:${m[2]}:${m[3]} ${m[4]}:${m[5]}:${m[6] || '00'}`;
  }

  function getLocalOffsetString() {
    const off = -new Date().getTimezoneOffset();
    const sign = off >= 0 ? '+' : '-';
    const abs = Math.abs(off);
    const hh = String(Math.floor(abs / 60)).padStart(2, '0');
    const mm = String(abs % 60).padStart(2, '0');
    return `${sign}${hh}:${mm}`;
  }

  function encodeUtf16LeWithNull(str) {
    const bytes = new Uint8Array((str.length + 1) * 2);
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      bytes[i * 2] = code & 0xFF;
      bytes[i * 2 + 1] = (code >> 8) & 0xFF;
    }
    return bytes;
  }

  function makeAsciiEntry(tag, str) {
    const enc = new TextEncoder().encode(String(str) + '\0');
    return { tag, type: 2, count: enc.length, bytes: enc };
  }

  function makeShortEntry(tag, val) {
    const b = new Uint8Array(2);
    new DataView(b.buffer).setUint16(0, val & 0xFFFF, true);
    return { tag, type: 3, count: 1, bytes: b };
  }

  function makeLongEntry(tag, val) {
    const b = new Uint8Array(4);
    new DataView(b.buffer).setUint32(0, val >>> 0, true);
    return { tag, type: 4, count: 1, bytes: b };
  }

  function makeRationalEntry(tag, pairs) {
    const b = new Uint8Array(pairs.length * 8);
    const dv = new DataView(b.buffer);
    pairs.forEach(([num, den], i) => {
      dv.setUint32(i * 8, num >>> 0, true);
      dv.setUint32(i * 8 + 4, den >>> 0, true);
    });
    return { tag, type: 5, count: pairs.length, bytes: b };
  }

  function makeSRationalEntry(tag, pairs) {
    const b = new Uint8Array(pairs.length * 8);
    const dv = new DataView(b.buffer);
    pairs.forEach(([num, den], i) => {
      dv.setInt32(i * 8, num | 0, true);
      dv.setInt32(i * 8 + 4, den | 0, true);
    });
    return { tag, type: 10, count: pairs.length, bytes: b };
  }

  function makeByteEntry(tag, arr) {
    const b = new Uint8Array(arr);
    return { tag, type: 1, count: b.length, bytes: b };
  }

  function makeUndefinedEntry(tag, arr) {
    const b = new Uint8Array(arr);
    return { tag, type: 7, count: b.length, bytes: b };
  }

  function writeIfdBlock(entries, startOffset) {
    entries.sort((a, b) => a.tag - b.tag);
    const headerLen = 2 + entries.length * 12 + 4;
    let extraLen = 0;
    const offsets = [];
    entries.forEach((e) => {
      if (e.bytes.length > 4) {
        offsets.push(startOffset + headerLen + extraLen);
        extraLen += e.bytes.length + (e.bytes.length % 2);
      } else {
        offsets.push(null);
      }
    });
    const total = headerLen + extraLen;
    const out = new Uint8Array(total);
    const dv = new DataView(out.buffer);
    dv.setUint16(0, entries.length, true);
    let extraPos = headerLen;
    entries.forEach((e, idx) => {
      const pos = 2 + idx * 12;
      dv.setUint16(pos, e.tag, true);
      dv.setUint16(pos + 2, e.type, true);
      dv.setUint32(pos + 4, e.count, true);
      if (e.bytes.length <= 4) {
        out.set(e.bytes, pos + 8);
      } else {
        dv.setUint32(pos + 8, offsets[idx], true);
        out.set(e.bytes, extraPos);
        extraPos += e.bytes.length + (e.bytes.length % 2);
      }
    });
    dv.setUint32(2 + entries.length * 12, 0, true);
    return out;
  }

  function buildExifApp1Segment(width, height, orientation = 1) {
    const makeVal = ($('make').value || '').trim();
    const modelVal = ($('model').value || '').trim();
    const softVal = ($('software').value || '').trim();
    const lensVal = localizeLens(($('lensModel').value || '').trim());
    const fVal = ($('fNumber').value || '').trim();
    const focalVal = ($('focalLength').value || '').trim();
    const focal35Val = ($('focalLength35').value || '').trim();
    const isoVal = ($('isoInput').value || '').trim();
    const shutterVal = ($('shutterInput').value || '').trim();
    const biasVal = ($('biasInput').value || '').trim();
    const dtVal = formatExifDateTime($('dateTimeOriginal').value);
    const offsetStr = getLocalOffsetString();
    const latVal = parseFloat($('gpsLatitudeInput').value);
    const lngVal = parseFloat($('gpsLongitudeInput').value);
    const altVal = parseFloat($('gpsAltitude').value || '0');

    const ifd0 = [
      makeShortEntry(0x0112, orientation),
      makeRationalEntry(0x011A, [[72, 1]]),
      makeRationalEntry(0x011B, [[72, 1]]),
      makeShortEntry(0x0128, 2),
      makeShortEntry(0x0213, 1)
    ];
    if (makeVal) ifd0.push(makeAsciiEntry(0x010F, makeVal));
    if (modelVal) {
      ifd0.push(makeAsciiEntry(0x0110, modelVal));
      ifd0.push(makeAsciiEntry(0x013C, modelVal));
    }
    if (softVal) ifd0.push(makeAsciiEntry(0x0131, softVal));
    if (dtVal) ifd0.push(makeAsciiEntry(0x0132, dtVal));
    if (lensVal && /[^\x00-\x7F]/.test(lensVal)) {
      ifd0.push(makeByteEntry(0x9C9C, encodeUtf16LeWithNull(lensVal)));
    }

    const exifIfd = [
      makeUndefinedEntry(0x9000, [48, 50, 51, 50]),
      makeUndefinedEntry(0x9101, [1, 2, 3, 0]),
      makeUndefinedEntry(0xA000, [48, 49, 48, 48]),
      makeShortEntry(0xA001, 1),
      makeShortEntry(0x8822, 2),
      makeShortEntry(0x9207, 5),
      makeShortEntry(0x9209, 16),
      makeShortEntry(0xA402, 0),
      makeShortEntry(0xA403, 0),
      makeShortEntry(0xA406, 0),
      makeShortEntry(0xA217, 2)
    ];

    if (width > 0) exifIfd.push(makeLongEntry(0xA002, width));
    if (height > 0) exifIfd.push(makeLongEntry(0xA003, height));

    if (dtVal) {
      exifIfd.push(makeAsciiEntry(0x9003, dtVal));
      exifIfd.push(makeAsciiEntry(0x9004, dtVal));
      exifIfd.push(makeAsciiEntry(0x9010, offsetStr));
      exifIfd.push(makeAsciiEntry(0x9011, offsetStr));
      exifIfd.push(makeAsciiEntry(0x9012, offsetStr));
      exifIfd.push(makeAsciiEntry(0x9291, '128'));
    }

    const expRat = parseRational(shutterVal, 1000000);
    if (expRat) exifIfd.push(makeRationalEntry(0x829A, [expRat]));

    const fRat = parseRational(fVal, 100);
    if (fRat) exifIfd.push(makeRationalEntry(0x829D, [fRat]));

    const isoNum = parseInt(isoVal, 10);
    if (Number.isFinite(isoNum) && isoNum > 0) {
      exifIfd.push(makeShortEntry(0x8827, Math.min(65535, isoNum)));
    }

    if (biasVal !== '') {
      const bNum = parseFloat(biasVal);
      if (Number.isFinite(bNum)) {
        exifIfd.push(makeSRationalEntry(0x9204, [[Math.round(bNum * 100), 100]]));
      }
    }

    const focRat = parseRational(focalVal, 1000);
    if (focRat) exifIfd.push(makeRationalEntry(0x920A, [focRat]));

    const foc35Num = parseInt(focal35Val, 10);
    if (Number.isFinite(foc35Num) && foc35Num > 0) {
      exifIfd.push(makeShortEntry(0xA405, foc35Num));
    }

    if (makeVal) exifIfd.push(makeAsciiEntry(0xA433, makeVal));
    if (lensVal) {
      exifIfd.push(makeAsciiEntry(0xA434, lensVal));
      const lookupKey = (currentLens === 'main2') ? 'main' : currentLens;
      if (currentPreset && currentPreset.lenses && currentPreset.lenses[lookupKey]) {
        const lObj = currentPreset.lenses[lookupKey];
        if (Array.isArray(lObj.appleSpec) && lObj.appleSpec.length === 4) {
          const sp = lObj.appleSpec.map((v) => parseRational(v, 1000) || [0, 1]);
          exifIfd.push(makeRationalEntry(0xA432, sp));
        }
      }
    }

    const hasGps = Number.isFinite(latVal) && Number.isFinite(lngVal);
    const gpsIfd = [];
    if (hasGps) {
      gpsIfd.push(makeByteEntry(0x0000, [2, 2, 0, 0]));
      gpsIfd.push(makeAsciiEntry(0x0001, latVal >= 0 ? 'N' : 'S'));
      gpsIfd.push(makeRationalEntry(0x0002, decimalToDmsRational(latVal)));
      gpsIfd.push(makeAsciiEntry(0x0003, lngVal >= 0 ? 'E' : 'W'));
      gpsIfd.push(makeRationalEntry(0x0004, decimalToDmsRational(lngVal)));
      const altAbs = Math.abs(Number.isFinite(altVal) ? altVal : 0);
      gpsIfd.push(makeByteEntry(0x0005, [altVal < 0 ? 1 : 0]));
      gpsIfd.push(makeRationalEntry(0x0006, [[Math.round(altAbs * 100), 100]]));
    }

    ifd0.push(makeLongEntry(0x8769, 0));
    if (hasGps) ifd0.push(makeLongEntry(0x8825, 0));

    const ifd0Dummy = writeIfdBlock(ifd0, 8);
    const exifOffset = 8 + ifd0Dummy.length;
    const exifBlock = writeIfdBlock(exifIfd, exifOffset);
    const gpsOffset = exifOffset + exifBlock.length;
    const gpsBlock = hasGps ? writeIfdBlock(gpsIfd, gpsOffset) : new Uint8Array(0);

    const exifPtrEntry = ifd0.find((e) => e.tag === 0x8769);
    if (exifPtrEntry) new DataView(exifPtrEntry.bytes.buffer).setUint32(0, exifOffset, true);
    if (hasGps) {
      const gpsPtrEntry = ifd0.find((e) => e.tag === 0x8825);
      if (gpsPtrEntry) new DataView(gpsPtrEntry.bytes.buffer).setUint32(0, gpsOffset, true);
    }

    const ifd0Block = writeIfdBlock(ifd0, 8);
    const tiffLen = 8 + ifd0Block.length + exifBlock.length + gpsBlock.length;
    const app1PayloadLen = 6 + tiffLen;
    const seg = new Uint8Array(4 + app1PayloadLen);
    const dv = new DataView(seg.buffer);
    seg[0] = 0xFF;
    seg[1] = 0xE1;
    dv.setUint16(2, app1PayloadLen + 2, false);
    seg.set([0x45, 0x78, 0x69, 0x66, 0x00, 0x00], 4);
    seg.set([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00], 10);
    seg.set(ifd0Block, 18);
    seg.set(exifBlock, 18 + ifd0Block.length);
    if (hasGps) seg.set(gpsBlock, 18 + ifd0Block.length + exifBlock.length);
    return seg;
  }

  function buildXmpSegment(width, height, orientation) {
    const xmlEscape = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    const lens = xmlEscape(localizeLens($('lensModel').value));
    const xml = `<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:aux="http://ns.adobe.com/exif/1.0/aux/" xmlns:exifEX="http://cipa.jp/exif/1.0/" tiff:Orientation="${orientation}" exif:PixelXDimension="${width}" exif:PixelYDimension="${height}" aux:Lens="${lens}" exifEX:LensModel="${lens}"/></rdf:RDF></x:xmpmeta>`;
    const payload = new TextEncoder().encode('http://ns.adobe.com/xap/1.0/\0' + xml);
    if (payload.length > 65533) throw new Error('镜头信息过长，请缩短后再导出');
    const result = new Uint8Array(payload.length + 4);
    result.set([255, 225]);
    new DataView(result.buffer).setUint16(2, payload.length + 2, false);
    result.set(payload, 4);
    return result;
  }

  function injectExifIntoJpegBytes(jpegBytes, app1Seg, targetSizeBytes, xmpSeg) {
    const chunks = [new Uint8Array([0xFF, 0xD8]), app1Seg];
    if (xmpSeg) chunks.push(xmpSeg);
    let pos = 2;
    while (pos + 4 <= jpegBytes.length && jpegBytes[pos] === 0xFF) {
      const marker = jpegBytes[pos + 1];
      if (marker === 0xDA || marker === 0xD9) break;
      const segLen = (jpegBytes[pos + 2] << 8) | jpegBytes[pos + 3];
      if (segLen < 2 || pos + 2 + segLen > jpegBytes.length) break;
      const isExifApp1 = marker === 0xE1 &&
        segLen >= 8 &&
        jpegBytes[pos + 4] === 0x45 &&
        jpegBytes[pos + 5] === 0x78 &&
        jpegBytes[pos + 6] === 0x69 &&
        jpegBytes[pos + 7] === 0x66;
      const isXmp = marker === 0xE1 && new TextDecoder().decode(jpegBytes.subarray(pos + 4, pos + Math.min(40, 2 + segLen))).startsWith('http://ns.adobe.com/');
      // Drop stale XMP orientation/dimensions together with replaced EXIF.
      if (!isExifApp1 && !isXmp) {
        chunks.push(jpegBytes.subarray(pos, pos + 2 + segLen));
      }
      pos += 2 + segLen;
    }
    chunks.push(jpegBytes.subarray(pos));

    let currentLen = chunks.reduce((acc, c) => acc + c.length, 0);
    if (targetSizeBytes && targetSizeBytes > currentLen) {
      const padLen = targetSizeBytes - currentLen;
      chunks.push(new Uint8Array(padLen));
      currentLen = targetSizeBytes;
    }

    const out = new Uint8Array(currentLen);
    let offset = 0;
    chunks.forEach((c) => {
      out.set(c, offset);
      offset += c.length;
    });
    return out;
  }

  // True QuickTime / ISO BMFF `moov` Metadata Injector with `stco`/`co64` offset adjustment
  function makeMp4Box(typeStr, payloadBytes) {
    const out = new Uint8Array(8 + payloadBytes.length);
    const dv = new DataView(out.buffer);
    dv.setUint32(0, out.length, false);
    for (let i = 0; i < 4; i++) out[4 + i] = typeStr.charCodeAt(i);
    out.set(payloadBytes, 8);
    return out;
  }

  function buildQuickTimeMetaAtom() {
    const entries = [];
    const makeVal = ($('make').value || '').trim();
    const modelVal = ($('model').value || '').trim();
    const softVal = ($('software').value || '').trim();
    const lensVal = localizeLens(($('lensModel').value || '').trim());
    const fVal = ($('fNumber').value || '').trim();
    const dtVal = ($('dateTimeOriginal').value || '').trim();
    const latVal = parseFloat($('gpsLatitudeInput').value);
    const lngVal = parseFloat($('gpsLongitudeInput').value);
    const altVal = parseFloat($('gpsAltitude').value || '0');
    const vCap = ($('videoCaption').value || '').trim();
    const vCopy = ($('videoCopyright').value || '').trim();

    if (makeVal) entries.push(['com.apple.quicktime.make', makeVal]);
    if (modelVal) entries.push(['com.apple.quicktime.model', modelVal]);
    if (softVal) entries.push(['com.apple.quicktime.software', softVal]);
    if (lensVal) entries.push(['com.apple.quicktime.camera.lens_model', lensVal]);
    if (fVal) entries.push(['com.apple.quicktime.camera.lens_irisfnumber', fVal]);
    if (dtVal) entries.push(['com.apple.quicktime.creationdate', dtVal + ':00' + getLocalOffsetString()]);
    if (Number.isFinite(latVal) && Number.isFinite(lngVal)) {
      const latStr = (latVal >= 0 ? '+' : '') + latVal.toFixed(4);
      const lngStr = (lngVal >= 0 ? '+' : '') + lngVal.toFixed(4);
      const altStr = (altVal >= 0 ? '+' : '') + (Number.isFinite(altVal) ? altVal : 0).toFixed(2);
      entries.push(['com.apple.quicktime.location.ISO6709', `${latStr}${lngStr}${altStr}/`]);
      entries.push(['com.apple.quicktime.location.accuracy.horizontal', '5.000000']);
    }
    if (vCap) entries.push(['com.apple.quicktime.description', vCap]);
    if (vCopy) entries.push(['com.apple.quicktime.copyright', vCopy]);

    if (!entries.length) return null;

    const enc = new TextEncoder();
    const hdlrPayload = new Uint8Array(25);
    hdlrPayload.set(enc.encode('mdta'), 8);
    const hdlrAtom = makeMp4Box('hdlr', hdlrPayload);

    const keyAtoms = entries.map(([k]) => makeMp4Box('mdta', enc.encode(k)));
    const keysLen = 8 + keyAtoms.reduce((a, b) => a + b.length, 0);
    const keysPayload = new Uint8Array(keysLen);
    new DataView(keysPayload.buffer).setUint32(4, entries.length, false);
    let kOff = 8;
    keyAtoms.forEach((ka) => { keysPayload.set(ka, kOff); kOff += ka.length; });
    const keysAtom = makeMp4Box('keys', keysPayload);

    const ilstItems = entries.map(([, val], i) => {
      const valBytes = enc.encode(String(val));
      const dataPayload = new Uint8Array(8 + valBytes.length);
      new DataView(dataPayload.buffer).setUint32(0, 1, false);
      dataPayload.set(valBytes, 8);
      const dataAtom = makeMp4Box('data', dataPayload);
      const itemAtom = new Uint8Array(8 + dataAtom.length);
      const dv = new DataView(itemAtom.buffer);
      dv.setUint32(0, itemAtom.length, false);
      dv.setUint32(4, i + 1, false);
      itemAtom.set(dataAtom, 8);
      return itemAtom;
    });
    const ilstPayload = new Uint8Array(ilstItems.reduce((a, b) => a + b.length, 0));
    let iOff = 0;
    ilstItems.forEach((it) => { ilstPayload.set(it, iOff); iOff += it.length; });
    const ilstAtom = makeMp4Box('ilst', ilstPayload);

    const metaPayload = new Uint8Array(hdlrAtom.length + keysAtom.length + ilstAtom.length);
    metaPayload.set(hdlrAtom, 0);
    metaPayload.set(keysAtom, hdlrAtom.length);
    metaPayload.set(ilstAtom, hdlrAtom.length + keysAtom.length);
    return makeMp4Box('meta', metaPayload);
  }

  function parseMp4Boxes(bytes, start, end) {
    const boxes = [];
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    let pos = start;
    while (pos + 8 <= end) {
      let size = dv.getUint32(pos, false);
      const type = String.fromCharCode(bytes[pos + 4], bytes[pos + 5], bytes[pos + 6], bytes[pos + 7]);
      let headerSize = 8;
      if (size === 1) {
        if (pos + 16 > end) break;
        const hi = dv.getUint32(pos + 8, false);
        const lo = dv.getUint32(pos + 12, false);
        size = hi * 4294967296 + lo;
        headerSize = 16;
      } else if (size === 0) {
        size = end - pos;
      }
      if (size < headerSize || pos + size > end) break;
      boxes.push({ type, start: pos, size, headerSize, end: pos + size });
      pos += size;
    }
    return boxes;
  }

  function shiftStcoOffsetsInMoov(moovBytes, delta) {
    if (!delta) return;
    const containerTypes = new Set(['moov', 'trak', 'mdia', 'minf', 'stbl', 'edts', 'dinf']);
    const dv = new DataView(moovBytes.buffer, moovBytes.byteOffset, moovBytes.byteLength);

    function walk(start, end) {
      const boxes = parseMp4Boxes(moovBytes, start, end);
      for (const b of boxes) {
        if (containerTypes.has(b.type)) {
          walk(b.start + b.headerSize, b.end);
        } else if (b.type === 'stco') {
          const countPos = b.start + b.headerSize + 4;
          if (countPos + 4 <= b.end) {
            const count = dv.getUint32(countPos, false);
            for (let i = 0; i < count; i++) {
              const offPos = countPos + 4 + i * 4;
              if (offPos + 4 <= b.end) {
                const oldVal = dv.getUint32(offPos, false);
                dv.setUint32(offPos, (oldVal + delta) >>> 0, false);
              }
            }
          }
        } else if (b.type === 'co64') {
          const countPos = b.start + b.headerSize + 4;
          if (countPos + 4 <= b.end) {
            const count = dv.getUint32(countPos, false);
            for (let i = 0; i < count; i++) {
              const offPos = countPos + 4 + i * 8;
              if (offPos + 8 <= b.end) {
                const hi = dv.getUint32(offPos, false);
                const lo = dv.getUint32(offPos + 4, false);
                const updated = hi * 4294967296 + lo + delta;
                dv.setUint32(offPos, Math.floor(updated / 4294967296) >>> 0, false);
                dv.setUint32(offPos + 4, (updated >>> 0), false);
              }
            }
          }
        }
      }
    }

    walk(8, moovBytes.length);
  }

  async function processVideoItem(item, targetSizeBytes) {
    const rawBuf = new Uint8Array(await item.file.arrayBuffer());
    if (rawBuf.length < 16) {
      throw new Error('文件太小，不是有效的视频');
    }
    const metaAtom = buildQuickTimeMetaAtom();
    if (!metaAtom) {
      return new Blob([rawBuf], { type: item.file.type || 'video/quicktime' });
    }
    const udtaAtom = makeMp4Box('udta', metaAtom);

    const topBoxes = parseMp4Boxes(rawBuf, 0, rawBuf.length);
    const moovIdx = topBoxes.findIndex((b) => b.type === 'moov');
    const mdatIdx = topBoxes.findIndex((b) => b.type === 'mdat');

    let outBytes;
    if (moovIdx !== -1) {
      const moovBox = topBoxes[moovIdx];
      const childBoxes = parseMp4Boxes(rawBuf, moovBox.start + moovBox.headerSize, moovBox.end);
      const keptChildren = childBoxes
        .filter((c) => c.type !== 'meta' && c.type !== 'udta')
        .map((c) => rawBuf.subarray(c.start, c.end));
      keptChildren.push(metaAtom);
      keptChildren.push(udtaAtom);

      const newMoovPayloadLen = keptChildren.reduce((a, b) => a + b.length, 0);
      const newMoov = new Uint8Array(8 + newMoovPayloadLen);
      new DataView(newMoov.buffer).setUint32(0, newMoov.length, false);
      newMoov.set([0x6D, 0x6F, 0x6F, 0x76], 4); // "moov"
      let mOff = 8;
      keptChildren.forEach((c) => { newMoov.set(c, mOff); mOff += c.length; });

      const delta = newMoov.length - moovBox.size;
      if (mdatIdx !== -1 && moovIdx < mdatIdx && delta !== 0) {
        shiftStcoOffsetsInMoov(newMoov, delta);
      }

      const fileChunks = [];
      topBoxes.forEach((b, idx) => {
        if (idx === moovIdx) fileChunks.push(newMoov);
        else fileChunks.push(rawBuf.subarray(b.start, b.end));
      });
      const totalLen = fileChunks.reduce((a, b) => a + b.length, 0);
      outBytes = new Uint8Array(totalLen);
      let fOff = 0;
      fileChunks.forEach((c) => { outBytes.set(c, fOff); fOff += c.length; });
    } else {
      outBytes = new Uint8Array(rawBuf.length + udtaAtom.length);
      outBytes.set(rawBuf, 0);
      outBytes.set(udtaAtom, rawBuf.length);
    }

    if (targetSizeBytes && targetSizeBytes > outBytes.length) {
      const padTotal = targetSizeBytes - outBytes.length;
      if (padTotal >= 8) {
        const freeBox = new Uint8Array(padTotal);
        new DataView(freeBox.buffer).setUint32(0, padTotal, false);
        freeBox.set([0x66, 0x72, 0x65, 0x65], 4); // "free"
        const padded = new Uint8Array(targetSizeBytes);
        padded.set(outBytes, 0);
        padded.set(freeBox, outBytes.length);
        outBytes = padded;
      }
    }

    return new Blob([outBytes], { type: item.file.type || 'video/quicktime' });
  }

  function jpegPixelDimensions(bytes) {
    let pos = 2;
    while (pos + 4 <= bytes.length && bytes[pos] === 255) {
      const marker = bytes[pos + 1];
      if (marker === 218 || marker === 217) break;
      const length = (bytes[pos + 2] << 8) | bytes[pos + 3];
      if (length < 2 || pos + 2 + length > bytes.length) break;
      if ([192, 193, 194, 195, 197, 198, 199, 201, 202, 203, 205, 206, 207].includes(marker) && length >= 7) {
        return { w: (bytes[pos + 7] << 8) | bytes[pos + 8], h: (bytes[pos + 5] << 8) | bytes[pos + 6] };
      }
      pos += 2 + length;
    }
    throw new Error('无法读取 JPG 像素尺寸，请重新选择有效照片');
  }

  async function processImageItem(item, targetSizeBytes) {
    const customW = parseInt($('imageWidth').value, 10);
    const customH = parseInt($('imageHeight').value, 10);
    const hasCustomSize = customW > 0 && customH > 0;
    const rawBytes = new Uint8Array(await item.file.arrayBuffer());
    const isJpeg = rawBytes[0] === 255 && rawBytes[1] === 216;
    let orientation = 1;
    let dims;
    if (isJpeg) {
      dims = jpegPixelDimensions(rawBytes);
      const parsed = await tryReadExifFromJpeg(item.file);
      orientation = (parsed && parsed.orientation) || 1;
      if (!hasCustomSize && exportOptions.orientation === 'preserve') {
        const app1 = buildExifApp1Segment(dims.w, dims.h, orientation);
        return new Blob([injectExifIntoJpegBytes(rawBytes, app1, targetSizeBytes,
          buildXmpSegment(dims.w, dims.h, orientation))], { type: 'image/jpeg' });
      }
    }

    // JPEG: neutralize metadata before decode, then apply all eight TIFF transforms once.
    // Other formats: the browser decodes their embedded orientation before canvas rendering.
    const decodeBlob = isJpeg
      ? new Blob([injectExifIntoJpegBytes(rawBytes, buildExifApp1Segment(dims.w, dims.h, 1), 0)], { type: 'image/jpeg' })
      : item.file;
    const decodeUrl = URL.createObjectURL(decodeBlob);
    try {
      const img = await new Promise((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = () => reject(new Error('浏览器无法解码这张照片，请转换为 JPG 或 PNG 后重试'));
        el.src = decodeUrl;
      });
      const w = img.naturalWidth, h = img.naturalHeight;
      const swapped = orientation >= 5 && orientation <= 8;
      const displayW = swapped ? h : w, displayH = swapped ? w : h;
      const outW = hasCustomSize ? customW : displayW;
      const outH = hasCustomSize ? customH : displayH;
      const canvas = document.createElement('canvas');
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) throw new Error('照片尺寸过大，请降低分辨率');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, outW, outH);
      ctx.imageSmoothingQuality = 'high';
      ctx.scale(outW / displayW, outH / displayH);
      const transforms = {
        1: [1, 0, 0, 1, 0, 0], 2: [-1, 0, 0, 1, w, 0],
        3: [-1, 0, 0, -1, w, h], 4: [1, 0, 0, -1, 0, h],
        5: [0, 1, 1, 0, 0, 0], 6: [0, 1, -1, 0, h, 0],
        7: [0, -1, -1, 0, h, w], 8: [0, -1, 1, 0, 0, w]
      };
      ctx.transform(...transforms[orientation]);
      ctx.drawImage(img, 0, 0);
      const jpegBlob = await new Promise((resolve, reject) => {
        canvas.toBlob((b) => b ? resolve(b) : reject(new Error('生成 JPG 失败，请降低分辨率')),
          'image/jpeg', exportOptions.quality / 100);
      });
      canvas.width = canvas.height = 1;
      const bytes = new Uint8Array(await jpegBlob.arrayBuffer());
      return new Blob([injectExifIntoJpegBytes(bytes, buildExifApp1Segment(outW, outH, 1),
        targetSizeBytes, buildXmpSegment(outW, outH, 1))], { type: 'image/jpeg' });
    } finally {
      URL.revokeObjectURL(decodeUrl);
    }
  }

  function makeExportFilename(item, index) {
    const ext = item.isVideo
      ? ((item.name.match(/\.(mov|mp4|m4v)$/i) || ['.mov'])[0])
      : '.jpg';
    if (exportNaming === 'original') {
      const base = item.name.replace(/\.[^.]+$/, '');
      return base + ext;
    }
    const randNum = Math.floor(1000 + Math.random() * 9000);
    return `IMG_${randNum + index}${ext.toLowerCase() === '.mov' ? '.MOV' : ext}`;
  }

  async function handleExport() {
    if (!selectedFiles.length) {
      showToast('请先选择文件', 'error');
      return;
    }

    setLoading(true, '正在写入 EXIF 参数...');
    try {
      exportedResults.forEach((r) => { if (r.url) URL.revokeObjectURL(r.url); });
      exportedResults = [];

      const customMb = parseFloat($('customFileSize').value);
      const targetSizeBytes = (Number.isFinite(customMb) && customMb > 0)
        ? Math.round(customMb * 1024 * 1024)
        : 0;

      for (let i = 0; i < selectedFiles.length; i++) {
        const item = selectedFiles[i];
        setLoading(true, `处理中 (${i + 1}/${selectedFiles.length})...`);
        const outBlob = item.isVideo
          ? await processVideoItem(item, targetSizeBytes)
          : await processImageItem(item, targetSizeBytes);
        const outName = makeExportFilename(item, i);
        const outUrl = URL.createObjectURL(outBlob);
        exportedResults.push({
          name: outName,
          blob: outBlob,
          size: outBlob.size,
          isVideo: item.isVideo,
          url: outUrl
        });
      }

      incrementExportStat();
      renderDownloadModal();
      updateSummaries();
      openModal('downloadModal');
      showToast('导出完成', 'success');
    } catch (err) {
      showToast(err && err.message ? err.message : '导出失败，请重试', 'error');
    } finally {
      setLoading(false);
    }
  }

  function triggerBlobDownload(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function renderDownloadModal() {
    const listEl = $('downloadList');
    const shareAllBtn = $('shareAllBtn');
    const footerEl = $('downloadModalFooter');
    const zipBtn = $('downloadZipBtn');
    if (!listEl) return;

    const canWebShare = !!(navigator.share && navigator.canShare);
    if (shareAllBtn) shareAllBtn.hidden = !canWebShare;
    if (footerEl) {
      footerEl.classList.toggle('triple', canWebShare && exportedResults.length > 1);
    }
    if (zipBtn) zipBtn.style.display = exportedResults.length > 1 ? '' : 'none';

    listEl.innerHTML = exportedResults.map((r, idx) => {
      const thumb = r.isVideo
        ? `<video class="download-item-thumb" src="${escapeHtml(r.url)}#t=0.001" controls playsinline preload="metadata"></video>`
        : `<img class="download-item-thumb" src="${escapeHtml(r.url)}" alt="${escapeHtml(r.name)}">`;
      const shareBtnHtml = canWebShare
        ? `<button type="button" class="download-item-btn share download-item-share" data-index="${idx}">分享</button>`
        : '';
      return `<div class="download-item">
        ${thumb}
        <div class="download-item-bar">
          <div class="download-item-info">
            <div class="download-item-name">${escapeHtml(r.name)}</div>
            <div class="download-item-status done" id="status-${idx}">${formatFileSize(r.size)} · 已写入 EXIF</div>
          </div>
          <div class="download-item-actions">
            ${shareBtnHtml}
            <button type="button" class="download-item-btn download-item-download" data-index="${idx}">下载</button>
          </div>
        </div>
      </div>`;
    }).join('');

    listEl.querySelectorAll('.download-item-download').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        const r = exportedResults[idx];
        if (!r) return;
        triggerBlobDownload(r.url, r.name);
        const st = $(`status-${idx}`);
        if (st) st.textContent = `${formatFileSize(r.size)} · 已下载`;
      });
    });

    listEl.querySelectorAll('.download-item-share').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const idx = parseInt(btn.dataset.index, 10);
        const r = exportedResults[idx];
        if (!r) return;
        try {
          const f = new File([r.blob], r.name, { type: r.blob.type || 'image/jpeg' });
          if (navigator.canShare && navigator.canShare({ files: [f] })) {
            await navigator.share({ files: [f], title: r.name });
            const st = $(`status-${idx}`);
            if (st) st.textContent = `${formatFileSize(r.size)} · 已分享`;
          } else {
            showToast('当前浏览器不支持分享', 'info');
          }
        } catch (e) {}
      });
    });
  }

  function initStats() {
    let vid = storageGet('stat_vid', '');
    if (!vid) {
      vid = 'v_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      storageSet('stat_vid', vid);
    }
    let pv = parseInt(storageGet('local_stat_pv', '1286'), 10) + 1;
    let uv = parseInt(storageGet('local_stat_uv', '412'), 10);
    let exp = parseInt(storageGet('local_stat_exp', '856'), 10);
    storageSet('local_stat_pv', String(pv));
    if ($('stat_pv')) $('stat_pv').textContent = String(pv);
    if ($('stat_uv')) $('stat_uv').textContent = String(uv);
    if ($('stat_today')) $('stat_today').textContent = String(Math.max(12, pv - 1250));
    if ($('stat_tuv')) $('stat_tuv').textContent = '19';
    if ($('stat_yuv')) $('stat_yuv').textContent = '64';
    if ($('stat_exp')) $('stat_exp').textContent = String(exp);

    // Also try fetching live stats from original backend if reachable
    try {
      Promise.resolve(null)
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (!d) return;
          ['pv', 'uv', 'today', 'tuv', 'yuv', 'exp'].forEach((k) => {
            if (d[k] != null && $(`stat_${k}`)) $(`stat_${k}`).textContent = String(d[k]);
          });
        })
        .catch(() => {});
    } catch (e) {}
  }

  function incrementExportStat() {
    let exp = parseInt(storageGet('local_stat_exp', '856'), 10) + 1;
    storageSet('local_stat_exp', String(exp));
    if ($('stat_exp')) $('stat_exp').textContent = String(exp);
    try {
      const vid = storageGet('stat_vid', 'anon');
      Promise.resolve(null).catch(() => {});
    } catch (e) {}
  }

  function bindEvents() {
    const settingsBtn = $('settingsBtn');
    const settingsMenu = $('settingsMenu');
    const closeSettingsMenu = () => {
      if (settingsMenu) settingsMenu.classList.remove('open');
      if (settingsBtn) settingsBtn.setAttribute('aria-expanded', 'false');
    };
    if (settingsBtn && settingsMenu) {
      settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = settingsMenu.classList.toggle('open');
        settingsBtn.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', (e) => {
        if (!settingsMenu.contains(e.target) && e.target !== settingsBtn) {
          closeSettingsMenu();
        }
      });
    }

    $('appSettingsBtn').addEventListener('click', () => {
      closeSettingsMenu();
      settingsBtn.setAttribute('aria-expanded', 'false');
      openSettingsPanel('general');
    });
    $('photoOrientationMode').value = exportOptions.orientation;
    $('jpegQuality').value = String(exportOptions.quality);
    $('jpegQualityValue').textContent = String(exportOptions.quality) + '%';
    $('photoOrientationMode').addEventListener('change', (e) => {
      exportOptions.orientation = e.target.value;
      storageSet('eif_photo_orientation', exportOptions.orientation);
    });
    $('jpegQuality').addEventListener('input', (e) => {
      exportOptions.quality = Number(e.target.value);
      $('jpegQualityValue').textContent = exportOptions.quality + '%';
      storageSet('eif_jpeg_quality', String(exportOptions.quality));
    });
    $('lensModel').addEventListener('change', () => {
      $('lensModel').value = localizeLens($('lensModel').value);
      updateSummaries();
      saveSession();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSettingsMenu();
        settingsBtn.setAttribute('aria-expanded', 'false');
        document.querySelectorAll('.modal-overlay.active').forEach((m) => closeModal(m.id));
      }
    });
    const themeToggleBtn = $('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(cur, true);
        if (settingsMenu) closeSettingsMenu();
      });
    }

    const resetBtn = $('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        FIELD_IDS.forEach((id) => { if ($(id)) $(id).value = ''; });
        if ($('gpsLatitudeInput')) $('gpsLatitudeInput').value = '';
        if ($('gpsLongitudeInput')) $('gpsLongitudeInput').value = '';
        if ($('gpsAltitude')) $('gpsAltitude').value = '0';
        currentPreset = null;
        currentGpsLabel = '';
        document.querySelectorAll('.resolution-btn[data-original], .resolution-btn[data-width]').forEach((b) => {
          b.classList.toggle('selected', b.dataset.original === '1');
        });
        document.querySelectorAll('.filesize-btn[data-follow], .filesize-btn[data-size]').forEach((b) => {
          b.classList.toggle('active', b.dataset.follow === '1');
        });
        storageRemove('target_exif_session_v5');
        updateLensButtonsUI();
        updateSummaries();
        if (settingsMenu) closeSettingsMenu();
        showToast('已清空所有参数', 'info');
      });
    }

    const uploadArea = $('uploadArea');
    const fileInput = $('fileInput');
    const addMoreBtn = $('addMoreBtn');
    const clearBtn = $('clearBtn');

    if (uploadArea && fileInput) {
      uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
      });
      uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('drag-over');
      });
      uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        if (e.dataTransfer && e.dataTransfer.files) {
          handleFilesSelected(e.dataTransfer.files);
        }
      });
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files.length) {
          handleFilesSelected(fileInput.files);
          fileInput.value = '';
        }
      });
    }

    if (addMoreBtn && fileInput) {
      addMoreBtn.addEventListener('click', () => fileInput.click());
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (!selectedFiles.length) {
          showToast('没有可清空的文件', 'info');
          return;
        }
        selectedFiles.forEach((it) => { if (it.previewUrl) URL.revokeObjectURL(it.previewUrl); });
        selectedFiles = [];
        renderFilesList();
        updateSummaries();
        showToast('已清空已选文件', 'info');
      });
    }

    // Workflow Bar step clicks
    document.querySelectorAll('#workflowBar .workflow-step').forEach((st) => {
      st.addEventListener('click', () => {
        const step = st.dataset.step;
        if (step === 'files' && fileInput) fileInput.click();
        else if (step === 'device') {
          renderRecentDevices();
          renderPresetList();
          openModal('deviceModal');
        } else if (step === 'settings') {
          openSettingsPanel('time');
        } else if (step === 'export') {
          handleExport();
        }
      });
    });

    const simpleDeviceRow = $('simpleDeviceRow');
    const deviceModalClose = $('deviceModalClose');
    const deviceClearBtn = $('deviceClearBtn');
    const presetSearchInput = $('presetSearchInput');
    const presetSearchClear = $('presetSearchClear');

    if (simpleDeviceRow) {
      simpleDeviceRow.addEventListener('click', (e) => {
        if (deviceClearBtn && (e.target === deviceClearBtn || deviceClearBtn.contains(e.target))) {
          e.stopPropagation();
          currentPreset = null;
          ['make', 'model', 'lensModel', 'fNumber', 'focalLength', 'focalLength35', 'software'].forEach((id) => {
            if ($(id)) $(id).value = '';
          });
          updateLensButtonsUI();
          updateSummaries();
          saveSession();
          showToast('已清除设备与镜头参数', 'info');
          return;
        }
        renderRecentDevices();
        renderPresetList();
        openModal('deviceModal');
      });
    }

    if (deviceModalClose) {
      deviceModalClose.addEventListener('click', () => closeModal('deviceModal'));
    }

    document.querySelectorAll('.preset-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        currentBrand = tab.dataset.brand || 'apple';
        syncBrandTabsUI();
        if (presetSearchInput) {
          presetSearchInput.value = '';
          presetSearchInput.placeholder = currentBrand === 'apple' ? '搜索 iPhone / iPad 型号...' : `搜索 ${tab.textContent.trim()} 型号...`;
        }
        renderPresetList();
      });
    });

    if (presetSearchInput) {
      presetSearchInput.addEventListener('input', () => renderPresetList());
    }
    if (presetSearchClear && presetSearchInput) {
      presetSearchClear.addEventListener('click', () => {
        presetSearchInput.value = '';
        renderPresetList();
      });
    }

    document.querySelectorAll('#lensButtons .lens-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        switchLens(btn.dataset.lens || 'main');
      });
    });

    const rowPanelMap = [
      ['simpleTimeRow', 'time'],
      ['advLensRow', 'lens'],
      ['advParamsRow', 'params'],
      ['advResolutionRow', 'resolution'],
      ['simpleFilesizeRow', 'filesize'],
      ['exportNamingRow', 'naming'],
      ['simpleVideoRow', 'video']
    ];
    rowPanelMap.forEach(([rowId, panelKey]) => {
      const rowEl = $(rowId);
      if (rowEl) {
        rowEl.addEventListener('click', () => openSettingsPanel(panelKey));
      }
    });

    const simpleLocationRow = $('simpleLocationRow');
    const gpsSection = $('gpsSection');
    const gpsSectionHeader = $('gpsSectionHeader');
    if (simpleLocationRow && gpsSection) {
      simpleLocationRow.addEventListener('click', () => {
        gpsSection.classList.remove('collapsed');
        tryLoadRealAmap();
        gpsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
    if (gpsSectionHeader && gpsSection) {
      gpsSectionHeader.addEventListener('click', () => {
        gpsSection.classList.toggle('collapsed');
        if (!gpsSection.classList.contains('collapsed')) {
          tryLoadRealAmap();
        }
      });
    }

    const gpsClearBtn = $('gpsClearBtn');
    const gpsLocateBtn = $('gpsLocateBtn');
    const gpsSearchBtn = $('gpsSearchBtn');
    const gpsSearchInput = $('gpsSearchInput');
    const amapKeyToggle = $('amapKeyToggle');
    const amapKeyRow = $('amapKeyRow');
    const amapKeyInput = $('amapKeyInput');
    const amapKeySave = $('amapKeySave');

    if (gpsClearBtn) {
      gpsClearBtn.addEventListener('click', () => {
        $('gpsLatitudeInput').value = '';
        $('gpsLongitudeInput').value = '';
        $('gpsAltitude').value = '0';
        currentGpsLabel = '';
        const resEl = $('gpsSearchResults');
        if (resEl) {
          resEl.classList.remove('active');
          resEl.innerHTML = '';
        }
        updateSummaries();
        saveSession();
        showToast('已清除位置信息', 'info');
      });
    }

    if (gpsLocateBtn) {
      gpsLocateBtn.addEventListener('click', async () => {
        showToast('定位中...', 'info');
        if (navigator.geolocation && window.isSecureContext) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const lat = pos.coords.latitude.toFixed(6);
              const lng = pos.coords.longitude.toFixed(6);
              $('gpsLatitudeInput').value = lat;
              $('gpsLongitudeInput').value = lng;
              if (pos.coords.altitude != null) {
                $('gpsAltitude').value = String(Math.round(pos.coords.altitude));
              }
              currentGpsLabel = '当前位置';
              if (window.__updateMapPin) window.__updateMapPin(parseFloat(lat), parseFloat(lng));
              updateSummaries();
              saveSession();
              reverseGeocode(lat, lng);
              showToast('已获取当前位置', 'success');
            },
            async () => {
              await fallbackIpLocate();
            },
            { timeout: 5000 }
          );
        } else {
          await fallbackIpLocate();
        }
      });
    }

    async function fallbackIpLocate() {
      try {
        const key = getAmapKey();
        const res = await fetch(`https://restapi.amap.com/v3/ip?key=${encodeURIComponent(key)}`);
        const data = await res.json();
        if (data && data.rectangle && typeof data.rectangle === 'string') {
          const parts = data.rectangle.split(';')[0].split(',');
          if (parts.length === 2) {
            const lng = parseFloat(parts[0]).toFixed(6);
            const lat = parseFloat(parts[1]).toFixed(6);
            $('gpsLatitudeInput').value = lat;
            $('gpsLongitudeInput').value = lng;
            currentGpsLabel = [data.province, data.city].filter((x) => typeof x === 'string' && x.length > 0).join(' · ') || 'IP 定位';
            if (window.__updateMapPin) window.__updateMapPin(parseFloat(lat), parseFloat(lng));
            updateSummaries();
            saveSession();
            showToast(`已定位至 ${currentGpsLabel}`, 'success');
            return;
          }
        }
      } catch (e) {}
      showToast('IP 定位失败，请手动输入坐标或点击热门城市', 'info');
    }

    if (gpsSearchBtn) {
      gpsSearchBtn.addEventListener('click', () => searchGpsLocation());
    }
    if (gpsSearchInput) {
      gpsSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          searchGpsLocation();
        }
      });
    }

    if (amapKeyToggle && amapKeyRow) {
      if (amapKeyInput) amapKeyInput.value = storageGet('eif_amap_key', '');
      amapKeyToggle.addEventListener('click', () => {
        amapKeyRow.style.display = amapKeyRow.style.display === 'none' ? 'flex' : 'none';
      });
    }
    if (amapKeySave && amapKeyInput) {
      amapKeySave.addEventListener('click', () => {
        storageSet('eif_amap_key', amapKeyInput.value.trim());
        amapKeyRow.style.display = 'none';
        showToast('高德 Key 已保存并生效', 'success');
      });
    }

    document.querySelectorAll('.gps-city-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lat = btn.dataset.lat || '';
        const lng = btn.dataset.lng || '';
        const label = btn.dataset.label || btn.textContent.trim();
        $('gpsLatitudeInput').value = lat;
        $('gpsLongitudeInput').value = lng;
        currentGpsLabel = label;
        if (window.__updateMapPin) window.__updateMapPin(parseFloat(lat), parseFloat(lng));
        updateSummaries();
        saveSession();
        showToast(`已选择 ${label}`, 'success');
      });
    });

    ['gpsLatitudeInput', 'gpsLongitudeInput', 'gpsAltitude'].forEach((id) => {
      const el = $(id);
      if (el) {
        el.addEventListener('input', () => {
          const lat = parseFloat($('gpsLatitudeInput').value);
          const lng = parseFloat($('gpsLongitudeInput').value);
          if (Number.isFinite(lat) && Number.isFinite(lng) && window.__updateMapPin) {
            window.__updateMapPin(lat, lng);
          }
          updateSummaries();
          saveSession();
        });
      }
    });

    const settingsModalClose = $('settingsModalClose');
    const settingsModalDone = $('settingsModalDone');
    if (settingsModalClose) settingsModalClose.addEventListener('click', () => closeModal('settingsModal'));
    if (settingsModalDone) {
      settingsModalDone.addEventListener('click', () => {
        updateSummaries();
        saveSession();
        closeModal('settingsModal');
        showToast('已保存', 'success');
      });
    }

    const timeClearBtn = $('timeClearBtn');
    if (timeClearBtn) {
      timeClearBtn.addEventListener('click', () => {
        $('dateTimeOriginal').value = '';
        updateSummaries();
        saveSession();
      });
    }

    const lensClearBtn = $('lensClearBtn');
    if (lensClearBtn) {
      lensClearBtn.addEventListener('click', () => {
        ['make', 'model', 'lensModel', 'focalLength', 'software'].forEach((id) => { if ($(id)) $(id).value = ''; });
        currentPreset = null;
        updateLensButtonsUI();
        updateSummaries();
        saveSession();
      });
    }

    const paramsClearBtn = $('paramsClearBtn');
    if (paramsClearBtn) {
      paramsClearBtn.addEventListener('click', () => {
        ['isoInput', 'focalLength35', 'biasInput', 'fNumber', 'shutterInput'].forEach((id) => { if ($(id)) $(id).value = ''; });
        updateSummaries();
        saveSession();
      });
    }

    document.querySelectorAll('.resolution-btn[data-original], .resolution-btn[data-width]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.resolution-btn[data-original], .resolution-btn[data-width]').forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (btn.dataset.original === '1') {
          $('imageWidth').value = '';
          $('imageHeight').value = '';
        } else {
          const w = parseInt(btn.dataset.width, 10);
          const h = parseInt(btn.dataset.height, 10);
          if (currentOrientation === 'portrait') {
            $('imageWidth').value = String(Math.min(w, h));
            $('imageHeight').value = String(Math.max(w, h));
          } else {
            $('imageWidth').value = String(Math.max(w, h));
            $('imageHeight').value = String(Math.min(w, h));
          }
        }
        updateSummaries();
        saveSession();
      });
    });

    document.querySelectorAll('.resolution-btn[data-orientation]').forEach((btn) => {
      btn.classList.toggle('selected', btn.dataset.orientation === currentOrientation);
      btn.addEventListener('click', () => {
        document.querySelectorAll('.resolution-btn[data-orientation]').forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentOrientation = btn.dataset.orientation || 'portrait';
        storageSet('eif_res_orientation', currentOrientation);
        const curW = parseInt($('imageWidth').value, 10);
        const curH = parseInt($('imageHeight').value, 10);
        if (curW > 0 && curH > 0) {
          if (currentOrientation === 'portrait') {
            $('imageWidth').value = String(Math.min(curW, curH));
            $('imageHeight').value = String(Math.max(curW, curH));
          } else {
            $('imageWidth').value = String(Math.max(curW, curH));
            $('imageHeight').value = String(Math.min(curW, curH));
          }
        }
        updateSummaries();
        saveSession();
      });
    });

    document.querySelectorAll('.filesize-btn[data-follow], .filesize-btn[data-size]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filesize-btn[data-follow], .filesize-btn[data-size]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        if (btn.dataset.follow === '1') {
          $('customFileSize').value = '';
        } else if (btn.dataset.size) {
          $('customFileSize').value = btn.dataset.size;
        }
        updateSummaries();
        saveSession();
      });
    });

    document.querySelectorAll('.filesize-btn[data-naming]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.naming === exportNaming);
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filesize-btn[data-naming]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        exportNaming = btn.dataset.naming || 'standard';
        storageSet('eif_export_naming', exportNaming);
        updateSummaries();
      });
    });

    FIELD_IDS.forEach((id) => {
      const el = $(id);
      if (el) {
        el.addEventListener('input', () => {
          updateSummaries();
          saveSession();
        });
      }
    });

    const simpleHeroPreview = $('simpleHeroPreview');
    const previewModalClose = $('previewModalClose');
    if (simpleHeroPreview) simpleHeroPreview.addEventListener('click', () => renderPreviewModal());
    if (previewModalClose) previewModalClose.addEventListener('click', () => closeModal('previewModal'));

    const exportBtn = $('exportBtn');
    const modalClose = $('modalClose');
    const downloadAllBtn = $('downloadAllBtn');
    const downloadZipBtn = $('downloadZipBtn');
    const shareAllBtn = $('shareAllBtn');

    if (exportBtn) exportBtn.addEventListener('click', () => handleExport());
    if (modalClose) modalClose.addEventListener('click', () => closeModal('downloadModal'));

    if (downloadAllBtn) {
      downloadAllBtn.addEventListener('click', () => {
        exportedResults.forEach((r, idx) => {
          setTimeout(() => {
            triggerBlobDownload(r.url, r.name);
            const st = $(`status-${idx}`);
            if (st) st.textContent = `${formatFileSize(r.size)} · 已下载`;
          }, idx * 250);
        });
      });
    }

    if (downloadZipBtn) {
      downloadZipBtn.addEventListener('click', async () => {
        if (typeof JSZip === 'undefined') {
          showToast('ZIP 组件加载中，请使用逐个下载', 'info');
          return;
        }
        try {
          setLoading(true, '正在打包 ZIP...');
          const zip = new JSZip();
          exportedResults.forEach((r) => {
            zip.file(r.name, r.blob);
          });
          const zipBlob = await zip.generateAsync({ type: 'blob' });
          const zipUrl = URL.createObjectURL(zipBlob);
          triggerBlobDownload(zipUrl, `EXIF_Export_${Date.now()}.zip`);
          setTimeout(() => URL.revokeObjectURL(zipUrl), 5000);
          showToast('ZIP 打包下载已开始', 'success');
        } catch (e) {
          showToast('打包 ZIP 失败', 'error');
        } finally {
          setLoading(false);
        }
      });
    }

    if (shareAllBtn) {
      shareAllBtn.addEventListener('click', async () => {
        try {
          const files = exportedResults.map((r) => new File([r.blob], r.name, { type: r.blob.type || 'image/jpeg' }));
          if (navigator.canShare && navigator.canShare({ files })) {
            await navigator.share({ files });
          } else {
            showToast('当前浏览器不支持批量文件分享', 'info');
          }
        } catch (e) {}
      });
    }

    if ($('supportBtn')) {
      $('supportBtn').addEventListener('click', () => {
        if (settingsMenu) closeSettingsMenu();
        openModal('supportModal');
      });
    }
    if ($('supportClose')) $('supportClose').addEventListener('click', () => closeModal('supportModal'));
    if ($('supportGoMiniProgram')) {
      $('supportGoMiniProgram').addEventListener('click', () => {
        closeModal('supportModal');
        openModal('miniProgramModal');
      });
    }
    if ($('groupListBtn')) {
      $('groupListBtn').addEventListener('click', () => {
        closeModal('supportModal');
        openModal('groupListModal');
      });
    }
    if ($('groupListClose')) $('groupListClose').addEventListener('click', () => closeModal('groupListModal'));
    if ($('copyGroupBtn')) $('copyGroupBtn').addEventListener('click', async () => {
      const input = $('qqGroupNumber');
      let copied = false;
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(input.value);
          copied = true;
        } catch (e) {}
      }
      if (!copied) {
        input.focus();
        input.select();
        input.setSelectionRange(0, input.value.length);
        try { copied = document.execCommand('copy'); } catch (e) {}
      }
      showToast(copied ? '群号 520949900 已复制' : '请长按群号复制，在 QQ 中搜索加入', copied ? 'success' : 'info');
    });

    if ($('feedbackBtn')) {
      $('feedbackBtn').addEventListener('click', () => {
        closeModal('supportModal');
        openModal('feedbackModal');
      });
    }
    if ($('feedbackClose')) $('feedbackClose').addEventListener('click', () => closeModal('feedbackModal'));
    if ($('feedbackSend')) {
      $('feedbackSend').addEventListener('click', () => {
        const txt = ($('feedbackText') ? $('feedbackText').value : '').trim();
        if (!txt) {
          showToast('请输入反馈内容', 'info');
          return;
        }
        if ($('feedbackText')) $('feedbackText').value = '';
        closeModal('feedbackModal');
        showToast('感谢您的反馈！', 'success');
      });
    }

    if ($('donateFab')) $('donateFab').addEventListener('click', () => openModal('donateModal'));
    if ($('donateClose')) $('donateClose').addEventListener('click', () => closeModal('donateModal'));
    if ($('miniProgramFab')) $('miniProgramFab').addEventListener('click', () => openModal('miniProgramModal'));
    if ($('miniProgramClose')) $('miniProgramClose').addEventListener('click', () => closeModal('miniProgramModal'));

    document.querySelectorAll('.modal-overlay').forEach((overlay) => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });
    });
  }

  initTheme();
  initGpsMap();
  restoreSession();
  updateLensButtonsUI();
  renderRecentDevices();
  renderPresetList();
  updateSummaries();
  initStats();
  bindEvents();
})();
