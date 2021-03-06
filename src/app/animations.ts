import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  animateChild
} from '@angular/animations';

export const slide = trigger('routeAnimations', [
  transition('loginPage <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],{ optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ],{ optional: true }),
    query(':leave', animateChild(),{ optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ right: '100%'}))
      ],{ optional: true }),
      query(':enter', [
        animate('200ms ease-out', style({ right: '0%'}))
      ],{ optional: true })
    ]),
    query(':enter', animateChild(),{ optional: true } ),
  ]),
   transition('* <=> loginPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],{ optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ],{ optional: true }),
    query(':leave', animateChild(),{ optional: true }),
    group([
      query(':leave', [
        animate('100ms ease-out', style({ right: '100%'}))
      ]),
      query(':enter', [
        animate('200ms ease-out', style({ right: '0%'}))
      ],{ optional: true })
    ]),
    query(':enter', animateChild(),{ optional: true }),
  ]),
  transition('* <=> addContactsPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],{ optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ],{ optional: true }),
    query(':leave', animateChild(),{ optional: true }),
    group([
      query(':leave', [
        animate('100ms ease-out', style({ right: '100%'}))
      ]),
      query(':enter', [
        animate('200ms ease-out', style({ right: '0%'}))
      ],{ optional: true })
    ]),
    query(':enter', animateChild(),{ optional: true }),
  ]),
  transition('addContactsPage <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],{ optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ],{ optional: true }),
    query(':leave', animateChild(),{ optional: true }),
    group([
      query(':leave', [
        animate('100ms ease-out', style({ right: '100%'}))
      ]),
      query(':enter', [
        animate('200ms ease-out', style({ right: '0%'}))
      ],{ optional: true })
    ]),
    query(':enter', animateChild(),{ optional: true }),
  ]),
  transition('newAccountPage <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],{ optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ],{ optional: true }),
    query(':leave', animateChild(),{ optional: true }),
    group([
      query(':leave', [
        animate('100ms ease-out', style({ right: '100%'}))
      ]),
      query(':enter', [
        animate('200ms ease-out', style({ right: '0%'}))
      ],{ optional: true })
    ]),
    query(':enter', animateChild(),{ optional: true }),
  ]),
  transition('newAccountPage <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],{ optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ],{ optional: true }),
    query(':leave', animateChild(),{ optional: true }),
    group([
      query(':leave', [
        animate('100ms ease-out', style({ right: '100%'}))
      ]),
      query(':enter', [
        animate('200ms ease-out', style({ right: '0%'}))
      ],{ optional: true })
    ]),
    query(':enter', animateChild(),{ optional: true }),
  ])
]);

