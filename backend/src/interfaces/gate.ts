export class LockRequest {         
    id: number;    
    lock: boolean;
};

export class StatusRequest {         
    id: number;    
    opened: boolean;
};

export class StatusResponse {
    id: number;
    opened: boolean;
    locked: boolean;
}