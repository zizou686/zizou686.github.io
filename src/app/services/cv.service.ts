import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private firestore: Firestore) {}

  getHeader(): Observable<any> {
    const ref = doc(this.firestore, 'header/arturo');
    return docData(ref);
  }
getSkills() {
  const ref = collection(this.firestore, 'skills');
  return collectionData(ref, { idField: 'id' });
}

getEducation() {
  const ref = collection(this.firestore, 'education');
  return collectionData(ref, { idField: 'id' });
}

getWorkExperience() {
  const ref = collection(this.firestore, 'work_experience');
  return collectionData(ref, { idField: 'id' });
}

getLanguages() {
  const ref = collection(this.firestore, 'languages');
  return collectionData(ref, { idField: 'id' });
}

getCertificates() {
  const ref = collection(this.firestore, 'certificates');
  return collectionData(ref, { idField: 'id' });
}

getInterests() {
  const ref = collection(this.firestore, 'interests');
  return collectionData(ref, { idField: 'id' });
}





  saveCvStructure(): Promise<void[]> {
    const data = [
      setDoc(doc(this.firestore, 'header/arturo'), {
        name: 'Arturo Carrera Huerta',
        email: 'arturocarrerahuerta@gmail.com',
        phone: '271 313 1065',
        city: 'Córdoba, Veracruz, México',
        profile: 'Estudiante de desarrollo de software con interés en programación, desarrollo de aplicaciones Java, JavaFX, bases de datos y arquitectura de software.',
        image: 'https://res.cloudinary.com/dwhh2yudk/image/upload/v1780519061/WhatsApp_Image_2026-06-03_at_2.37.04_PM_uva2oz.jpg'
      }),

      setDoc(doc(this.firestore, 'education/uv'), {
        university: 'Universidad Veracruzana',
        career: 'Ingeniería en Software',
        description: 'Formación en desarrollo de software, bases de datos, arquitectura de software, análisis y diseño de sistemas, programación orientada a objetos y metodologías de desarrollo.'
      }),

      setDoc(doc(this.firestore, 'work_experience/clima_api'), {
        title: 'Proyecto Clima API con JavaFX',
        items: [
          'Desarrollo de una aplicación de escritorio utilizando JavaFX.',
          'Consumo de servicios web para obtener información meteorológica.',
          'Implementación de interfaces gráficas para la visualización de datos.'
        ]
      }),

      setDoc(doc(this.firestore, 'work_experience/analisis_diseno'), {
        title: 'Sistema de Análisis y Diseño de Software',
        items: [
          'Elaboración de diagramas UML.',
          'Modelado de bases de datos.',
          'Definición de requerimientos y casos de uso.'
        ]
      }),

      setDoc(doc(this.firestore, 'work_experience/proyectos_java'), {
        title: 'Proyectos con Java',
        items: [
          'Desarrollo de aplicaciones orientadas a objetos.',
          'Implementación del patrón Modelo Vista Controlador (MVC).',
          'Manejo de estructuras de datos y lógica de programación.'
        ]
      }),

      setDoc(doc(this.firestore, 'skills/java'), {
        name: 'Java',
        level: 95
      }),

      setDoc(doc(this.firestore, 'skills/angular'), {
        name: 'Angular',
        level: 85
      }),

      setDoc(doc(this.firestore, 'skills/javafx'), {
        name: 'JavaFX',
        level: 80
      }),

      setDoc(doc(this.firestore, 'skills/git'), {
        name: 'Git / GitHub',
        level: 80
      }),

      setDoc(doc(this.firestore, 'skills/bases_datos'), {
        name: 'Bases de Datos',
        level: 75
      }),

      setDoc(doc(this.firestore, 'skills/linux'), {
        name: 'Linux',
        level: 70
      }),

      setDoc(doc(this.firestore, 'certificates/formacion_software'), {
        name: 'Formación académica en Ingeniería en Software'
      }),

      setDoc(doc(this.firestore, 'certificates/javafx'), {
        name: 'Desarrollo de proyectos con Java y JavaFX'
      }),

      setDoc(doc(this.firestore, 'certificates/analisis_diseno'), {
        name: 'Análisis y Diseño de Software'
      }),

      setDoc(doc(this.firestore, 'languages/espanol'), {
        name: 'Español',
        level: 'Nativo'
      }),

      setDoc(doc(this.firestore, 'languages/ingles'), {
        name: 'Inglés',
        level: 'Intermedio'
      }),

      setDoc(doc(this.firestore, 'interests/software'), {
        name: 'Desarrollo de Software'
      }),

      setDoc(doc(this.firestore, 'interests/programacion'), {
        name: 'Programación'
      }),

      setDoc(doc(this.firestore, 'interests/web'), {
        name: 'Tecnologías Web'
      }),

      setDoc(doc(this.firestore, 'interests/inteligencia_artificial'), {
        name: 'Inteligencia Artificial'
      })
    ];

    return Promise.all(data);
  }
}
