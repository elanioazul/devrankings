import { Injectable, computed, effect, inject, signal } from "@angular/core";
import { IUser } from "@core/interfaces/user.interface";
import { Subject } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { SessionStorageService } from "./session-storage.service";
import { MOCKED_USER } from "@core/constants/user-mocked";

const ACCESS_TOKEN = "auth-user";
const CURRENTUSER = "current-user";

export interface AuthState {
	user: IUser | null;
	isLoggedIn: boolean;
	error: string | null;
}

@Injectable({
	providedIn: "root",
})
export class AuthService {
	sessionStorageService = inject(SessionStorageService);

	//state
	private state = signal<AuthState>({
		user: null,
		isLoggedIn: false,
		error: null,
	});

	//selectors
	user = computed(() => this.state().user);
	isLoggedIn = computed(() => this.state().isLoggedIn);

	//sources
	readUserCredentials$ = new Subject<IUser>();
	errorReadingUserCredentials$ = new Subject<string>();
	logOut$ = new Subject<null>();

	constructor() {
		this.readUserCredentials$.pipe(takeUntilDestroyed()).subscribe({
			next: (credentials: IUser) =>
				this.state.update((state) => ({
					...state,
					user: credentials,
					isLoggedIn: true,
					error: null,
				})),
		});

		this.errorReadingUserCredentials$
			.pipe(takeUntilDestroyed())
			.subscribe((error) =>
				this.state.update((state) => ({
					...state,
					user: null,
					isLoggedIn: false,
					error: error,
				}))
			);

		this.logOut$.pipe(takeUntilDestroyed()).subscribe({
			next: (credentials: null) =>
				this.state.update((state) => ({
					...state,
					user: credentials,
					isLoggedIn: false,
					error: null,
				})),
		});

		//efects
		effect(() => {
			if (this.isLoggedIn()) {
				this.sessionStorageService.saveData(
					CURRENTUSER,
					JSON.stringify(this.user())
				);
			}
		});
	}

	login(user: IUser): void {
		if (
			MOCKED_USER.email === user.email &&
			MOCKED_USER.password === user.password
		) {
			this.readUserCredentials$.next(user);
		} else {
			this.errorReadingUserCredentials$.next("not recognized user");
		}
	}

	logout(): void {
		this.logOut$.next(null);
	}
}
