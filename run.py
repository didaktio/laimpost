"""
Run Django and React servers in parallel.
"""

import subprocess
import os
import signal
import multiprocessing
from typing import List


def run_command(command: List[str]) -> None:
    env = os.environ if command[0] == "npm" else None
    with subprocess.Popen(
        command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, env=env
    ) as process:
        for line in iter(process.stdout.readline, b""):
            print(line.decode(), end="")
        if process.poll() is None:
            process.terminate()


def main() -> None:
    commands: List[List[str]] = [
        ["python", "manage.py", "runserver"],
        ["npm", "start", "--prefix", "laimpost_react"],
    ]
    processes: List[multiprocessing.Process] = [
        multiprocessing.Process(target=run_command, args=(command,))
        for command in commands
    ]
    [p.start() for p in processes]

    def signal_handler(sig: int, frame) -> None:
        print("Terminating processes...")
        [p.terminate() for p in processes]

    signal.signal(signal.SIGINT, signal_handler)
    [p.join() for p in processes]


if __name__ == "__main__":
    main()
