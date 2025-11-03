import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-code',
      title: 'Custom Software Development',
      description:
        'We design and build scalable, maintainable software tailored to your unique business challenges.'
    },
    {
      icon: 'fas fa-brain',
      title: 'AI & Machine Learning',
      description:
        'Leverage artificial intelligence for data-driven insights, automation, and smarter decision-making.'
    },
    {
      icon: 'fas fa-flask',
      title: 'Research & Innovation Labs',
      description:
        'We explore the frontiers of computing — from quantum to cloud-native architectures — turning theory into prototypes.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Web & Mobile Solutions',
      description:
        'Modern, responsive, and accessible web and mobile applications with seamless user experiences.'
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Startup Technology Partner',
      description:
        'Helping startups scale fast with full-stack product development and technical strategy guidance.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Transformation',
      description:
        'Migrate, modernize, and optimize your systems for reliability, scalability, and cost efficiency in the cloud.'
    }
  ];
}
