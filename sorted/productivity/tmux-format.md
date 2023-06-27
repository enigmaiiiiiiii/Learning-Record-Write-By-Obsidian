# Tmux - Format

## What It Is

- Format is enclosed with `#{...}`
- some [option's value](tmux-options.md) is set by format

## Set Option With Format

```sh
set -g status-left "#{session_name} #{window_index} #{window_name}"
```

## Format Variable

| Variable name       | Replaced with                         |
| ------------------- | ------------------------------------- |
| active_window_index | Index of active window in session     |
| alternate_on        | 1 if pane is in alternate screen      |
| alternate_saved_x   | Saved cursor X in alternate screen    |
| alternate_saved_y   | Saved cursor Y in alternate screen    |
| buffer_created      | Time buffer created                   |
| buffer_name         | Name of buffer                        |
| buffer_sample       | Sample of start of buffer             |
| buffer_size         | Size of the specified buffer in bytes |
| client_activity     | Time client last had activity         |
| client_cell_height  | Height of each client cell in pixels  |
| client_cell_width   | Width of each client cell in pixels   |
| client_control_mode | 1 if client is in control mode        |
| client_created      | Time client created                   |
| client_discarded    | Bytes discarded when client behind    |
| client_flags        | List of client flags                  |
| client_height       | Height of client                      |
| client_key_table    | Current key table                     |
| client_last_session | Name of the client's last session     |
| client_name         | Name of client                        |
| client_pid          | PID of client process                 |

## Format Variable Alias

- `#H`: host
- `#h`: host_short
- `#I`: window_index
- `#W`: window_name
- `#F`: window_flags
- ...

Set format with alias

```sh
set -g status-left "#I"
```

